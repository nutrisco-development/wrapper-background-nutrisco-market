import React, {useState, useEffect, useMemo} from 'react';
import {UserLocationContext} from './UserLocationContext';
import {useQuery} from 'react-apollo';
import {useFullSession} from 'vtex.session-client';
import ORDERDATA from '../graphql/orderForm.graphql';
import {countries} from '../data/countries';

export const UserLocationProvider = ({children}) => {
  const [user, setUser] = useState<{
    region: string;
    postalCode: number;
    postalCodeStore: number;
    nameCommuneStore: string;
  } | null>({
    region: null,
    postalCode: null,
    postalCodeStore: null,
    nameCommuneStore: null,
  });

  const [userModal, setUserModal] = useState<string | null>('');

  const {loading: queryDataLoading, error: queryDataError, data: queryData} = useQuery(ORDERDATA, {ssr: false});

  const {loading: sessionLoading, error: sessionError, data: sessionData} = useFullSession();

  useEffect(() => {
    if (!queryDataLoading && !queryDataError) {
      let postalCodeCurrent = sessionData?.session?.namespaces?.public?.postalCode?.value;
      let allStates = countries.flatMap((region: {states: any}) => region.states);
      let state = allStates.find((state: {postalCode: any}) => state.postalCode === postalCodeCurrent);
      setUser({
        region: queryData?.orderForm?.shippingData?.address?.state,
        postalCode: queryData?.orderForm?.shippingData?.address?.postalCode,
        postalCodeStore: sessionData?.session?.namespaces?.public?.postalCode?.value,
        nameCommuneStore: state?.name,
      });
    }
  }, [queryDataLoading, queryDataError, queryData, setUser, setUserModal, sessionData]);

  //console.log('info:', sessionData?.session?.namespaces?.public?.postalCode?.value);

  // Memorizar el valor del contexto para evitar renders innecesarios
  const value = useMemo(
    () => ({
      user,
      setUser,
      userModal,
      setUserModal,
    }),
    [user, userModal]
  );

  return <UserLocationContext.Provider value={value}>{children}</UserLocationContext.Provider>;
  // return <UserLocationContext.Provider value={{user, setUser, userModal, setUserModal}}>{children}</UserLocationContext.Provider>;
};
