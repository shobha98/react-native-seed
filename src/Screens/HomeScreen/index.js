import React from 'react';
import {View, Text} from 'react-native';
import CustomHeader from '../../Components/customHeader';

import {styles} from './styles';

const HomeScreen = ({navigation}) => {
  return (
    <>
      <CustomHeader screenName="Home" navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.text}>Home Screen</Text>
      </View>
    </>
  );
};

export default HomeScreen;
