import { View, Text } from 'react-native';

import styles from './Layout.styles';

const Layout = () => {
  return (
    <View style={[styles.container, styles.direction]}>
      <View style={{backgroundColor: "red", flex: 1}} />
      <View style={{backgroundColor: "darkorange", flex: 2}} />
      <View style={{backgroundColor: "green", flex: 3}} />
    </View>
  );
};

export default Layout;
