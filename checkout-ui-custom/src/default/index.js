console.info('[checkout-ui-custom]');
const templateTermsConditionsOne = `
<div class="check-terms-and-conditions alert-danger-checkbox" id="boxcheckterms-one">
  <div class="link-terms-and-conditions">
    <a id="openModalTermsConditions" class="link-modal-terms-and-conditions" title="Ver los Términos y Condiciones" onclick="window.openModalTermsConditions()">Ver
      los Términos y Condiciones</a>&nbsp;<span>👀</span><a/>
  </div>
  <label class="container-check-terms" for="check-terms-one">
    Confirmo que he leido y acepto términos y condiciones de la tienda online, incluida la Politica de Privacidad.
    <input type="checkbox" id="check-terms-one">
    <span class="checkmark"></span>
  </label>
</div>
`;
/**********************************************************/
//const verifyLoggedIn = () => {}
function verifyLoggedIn() {
  console.info('[verifyLoggedIn]');
  const currentHash = window.location?.hash;
  const interval = setInterval(() => {
    const orderForm = vtexjs?.checkout?.orderForm;
    const isLoggedIn = orderForm?.loggedIn;
    if (isLoggedIn !== undefined) {
      clearInterval(interval);
      if (!isLoggedIn && !currentHash.includes('/cart')) {
        checkout.login();
      }
    }
  }, 1000);
}
document.addEventListener('DOMContentLoaded', () => {
  verifyLoggedIn();
});
window.addEventListener('hashchange', () => {
  verifyLoggedIn();
});
/**********************************************************/
const checkboxTermsConditions = function () {
  let btnPayCheckOne = document.querySelector('.payment-confirmation-wrap .payment-submit-wrap');
  let boxCheckTermsOne = document.querySelector('#boxcheckterms-one');

  if (window.location.hash === '#/payment') {
    let btnPaymentSubmitAll = document.querySelectorAll('#payment-data-submit');
    let btnPaymentAll = document.querySelectorAll('.BtnPayment');
    if (btnPaymentSubmitAll && btnPaymentAll) {
      if (boxCheckTermsOne !== null && document.querySelector('#check-terms-one').checked === false) {
        btnPaymentSubmitAll.forEach((item) => {
          item.setAttribute('disabled', '');
        });
        btnPaymentAll.forEach((item) => {
          item.setAttribute('disabled', '');
        });
      } else {
        btnPaymentSubmitAll.forEach((item) => {
          item.removeAttribute('disabled');
        });
        btnPaymentAll.forEach((item) => {
          item.removeAttribute('disabled');
        });
      }
    }
    if (boxCheckTermsOne === null) {
      btnPayCheckOne.insertAdjacentHTML('beforebegin', templateTermsConditionsOne);
      let checkBoxTermsOne = document.querySelector('#check-terms-one');
      checkBoxTermsOne.addEventListener('change', function () {
        if (this.checked) {
          this.classList.add('active');
          this.setAttribute('checked', '');
          document.querySelector('#boxcheckterms-one').classList.remove('alert-danger-checkbox');
          document.querySelector('#boxcheckterms-one').classList.add('alert-success-checkbox');
        } else {
          this.classList.remove('active');
          this.removeAttribute('checked');
          document.querySelector('#boxcheckterms-one').classList.add('alert-danger-checkbox');
          document.querySelector('#boxcheckterms-one').classList.remove('alert-success-checkbox');
        }
      });
    }
  }
};
setInterval(() => {
  checkboxTermsConditions();
}, 1000);
window.addEventListener('hashchange', () => {
  checkboxTermsConditions();
});
/**********************************************************/
window.openModalTermsConditions = () => {
  const modalTermsConditions = document.getElementById('myModalTerms');
  if (modalTermsConditions) {
    modalTermsConditions.style.display = 'flex';
    console.info('[modalTermsConditions]');
  }
  console.info('[openModalTermsConditions]');
};
window.closeModalTermsConditions = () => {
  const modalTermsConditions = document.getElementById('myModalTerms');
  if (modalTermsConditions) {
    modalTermsConditions.style.display = 'none';
    console.info('[modalTermsConditions]');
  }
  console.info('[closeModalTermsConditions]');
};
/**********************************************************/
document.addEventListener('keyup', (e) => {
  if (e.key === 'Escape') {
    const modalTermsConditions = document.getElementById('myModalTerms');
    modalTermsConditions.style.display = 'none';
  }
});
/**********************************************************/
//window.addEventListener('load', () => {}
document.addEventListener('DOMContentLoaded', () => {
  const coll = document.getElementsByClassName('collapsible-terms');
  for (const element of coll) {
    element.addEventListener('click', function () {
      this.classList.toggle('active-terms');
      const content = this.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  }
});
/**********************************************************/
const filterByProductCluster314 = (productosArray) => {
  return productosArray.flat().filter((product) => product.productClusters?.[314]);
};
const fetchProduct = async (id) => {
  const url = `/api/catalog_system/pub/products/search/?fq=productId:${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching product with ID: ${id}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    return null;
  }
};
const fetchAllProducts = async (data) => {
  try {
    const productPromises = data.map(fetchProduct);
    const products = await Promise.all(productPromises);
    const validProducts = products.filter(Boolean);
    const productosConCluster = filterByProductCluster314(validProducts);
    console.log('[CLUSTER_314]:', productosConCluster);
    const webpayPaymentMethod = document.getElementById('payment-group-webpayPaymentGroup');
    if (productosConCluster.length === 0 && webpayPaymentMethod) {
      webpayPaymentMethod.style.setProperty('display', 'flex', 'important');
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};
const evaluateProductCluster = () => {
  vtexjs.checkout.getOrderForm().done((orderForm) => {
    const productIds = orderForm?.items?.map((item) => item?.productId);
    if (productIds?.length) {
      fetchAllProducts(productIds);
    }
  });
};

const handleHashChange = () => {
  const currentHash = window.location?.hash;
  if (currentHash.includes('/payment')) {
    evaluateProductCluster();
    console.info('[evaluateProductCluster]');
  }
};
window.addEventListener('hashchange', handleHashChange);
document.addEventListener('DOMContentLoaded', handleHashChange);
