import React from 'react';
import {Header} from 'react-native-elements';

import Colors from '../constants/Colors';

function HeaderScreen({title, renderRightBtn = null, renderLeftBtn = null}) {
  return (
    <Header
      statusBarProps={{
        barStyle: 'light-content',
        backgroundColor: Colors.accentColor,
      }}
      backgroundColor={Colors.accentColor}
      leftComponent={renderLeftBtn && renderLeftBtn()}
      centerComponent={{text: title, style: {color: '#fff', fontSize: 25}}}
      rightComponent={renderRightBtn && renderRightBtn()}
    />
  );
}

export default HeaderScreen;
