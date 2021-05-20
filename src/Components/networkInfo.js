import React, {useEffect, useState} from 'react';
import {useNetInfo} from '@react-native-community/netinfo';
import {useDispatch} from 'react-redux';

import {networkInfo} from '../Redux/Actions/networkInfoActions';
import PopUpModal from './popUpModal';
import {string} from '../Config/string';

const NetworkInfo = () => {
  const netInfo = useNetInfo();
  const dispatch = useDispatch();

  const [isPopUp, setIsPopUp] = useState(netInfo.isConnected);

  useEffect(() => {
    dispatch(networkInfo(netInfo.isConnected || false));
    setIsPopUp(netInfo.isConnected);
  }, [netInfo]);

  return (
    <PopUpModal
      isPopUp={!isPopUp}
      setIsPopUp={setIsPopUp}
      title={string.connection_lost}
      content={string.no_internet_msg}
    />
  );
};

export default NetworkInfo;
