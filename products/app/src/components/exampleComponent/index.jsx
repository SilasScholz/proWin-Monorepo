import React from 'react';
import { View, Dimensions, Text, Image, TouchableOpacity } from 'react-native';
import { makeStyles, useTheme } from 'mova-rn-helpers/theme';
import { useSafeArea } from 'react-native-safe-area-context';

const Example = () => {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Text>This is a Component</Text>
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    width: 200,
    height: 50,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default Example;
