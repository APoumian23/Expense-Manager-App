/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {config} from '@gluestack-ui/config';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import React from 'react';
import RoutesLogin from './src/routes/RoutesLogin';
import RoutesUser from './src/routes/RoutesUser';
import {useAppSelector} from './src/redux/hooks';

function App(): React.JSX.Element {
  const {userIsLoggedIn} = useAppSelector(state => state.main);

  return (
    <GluestackUIProvider config={config}>
      {!userIsLoggedIn && <RoutesLogin />}
      {userIsLoggedIn && <RoutesUser />}
    </GluestackUIProvider>
  );
}

export default App;
