import React, {useEffect, useState} from 'react';
import {useNetInfo} from '@react-native-community/netinfo';
import {useDispatch} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';

import {networkInfo} from '../Redux/Actions/networkInfoActions';

const NetworkInfo = () => {
  const netInfo = useNetInfo();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(networkInfo(netInfo.isConnected || false));
  }, [netInfo]);

  return (
    <View style={netInfo.isConnected ? styles.online : styles.offline}>
      <Text style={styles.text}>
        {netInfo.isConnected ? 'Back to online' : 'Connection lost: offline'}
      </Text>
    </View>
  );
};

export default NetworkInfo;

const styles = StyleSheet.create({
  online: {
    backgroundColor: 'green',
    alignItems: 'center',
  },
  offline: {
    backgroundColor: 'red',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
});
