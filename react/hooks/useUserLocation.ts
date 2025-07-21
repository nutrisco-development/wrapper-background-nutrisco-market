import {useContext} from 'react';

import {UserLocationContext} from '../context/UserLocationContext';

const useUserLocation = () => useContext(UserLocationContext);

export default useUserLocation;
