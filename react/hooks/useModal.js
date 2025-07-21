import {useState} from 'react';

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return {isModalOpen, handleCloseModal, handleOpenModal};
};

export default useModal;
