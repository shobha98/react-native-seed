import {StyleSheet} from 'react-native';

import {colors} from '../../Styles/colors';
import {scale} from '../../Styles/scale';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  text: {
    color: colors.black,
    fontSize: scale(30),
    fontWeight: 'bold',
  },
});
