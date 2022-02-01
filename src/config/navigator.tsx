import React from 'react';
import {View} from 'react-native';
import {SignIn, Home} from 'screens';

function Navigator() {
  return (
    <View>
      <SignIn />
      <Home />
    </View>
  );
}

export default Navigator;
