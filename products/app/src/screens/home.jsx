import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'mova-rn-components/Icon';
import { makeStyles, useTheme } from 'mova-rn-helpers/theme';
import { Example } from 'components';

const Home = () => {
  const theme = useTheme();
  const styles = useStyles();

  return (
    <View style={styles.screen}>
      <Text>This is the Homescreen!!</Text>
      <Icon name="clock" size={50} color={theme.palette.primary.main} />
      <Text> This is the theme: {theme.palette.primary.main}</Text>
      <Example />
    </View>
  );
};

const useStyles = makeStyles((theme, props) => ({
  screen: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
}));

export default Home;
