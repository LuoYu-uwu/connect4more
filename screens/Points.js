import React from 'react';
import { SafeAreaView,} from 'react-native';
import { Quest } from './Quest/index';
import { GlobalDataProvider } from '../globalDataContext';
import { COLORS } from '../constant/theme';

const Points = () => {
  return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <GlobalDataProvider>
          <Quest />
        </GlobalDataProvider>
      </SafeAreaView>
  );
}

export default Points;
