import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {openDrawer} from '@react-navigation-drawer/lib/typescript/src/routers/DrawerActions';
import {AppText} from './common';

const DashboardHeader = props => {
  console.log();
  const {title, subTitle} = props;
  return (
    <View style={styles.container}>
      <View style={styles.drawerIcon}>
        <Icon
          size={32}
          name={'menu'}
          type={'entypo'}
          onPress={() => props.navigation.openDrawer()}
        />
      </View>
      <View style={styles.innerContainer}>
        <AppText size="18" bold capitalize style={{paddingRight: 10}}>
          {title}
        </AppText>
        <AppText size="14">{subTitle}</AppText>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: wp(100),
    height: hp(10),
    flexDirection: 'row',
    // backgroundColor: 'white',
  },
  drawerIcon: {
    // width: wp(30),
    paddingLeft: wp(8),
    paddingRight: wp(2),
    justifyContent: 'center',
  },
  innerContainer: {
    width: wp(70),
    paddingLeft: wp(2),
    // height: hp(20),
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    // alignSelf: 'center',
  },
});

export default DashboardHeader;
