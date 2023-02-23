import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingScreen } from '../screens/SettingScreen';
import { StackNavigator } from './StackNavigator';
import { Image, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
    screenOptions={{
       drawerType: width >= 768 ? 'permanent' : 'front', // Menú modo horizontal
       headerShown: false  // Oculta la hamburguesa
    }}
    drawerContent={ (props) => <MenuInterno { ...props } /> }
    >
      <Drawer.Screen name="StackNavigator" component={ StackNavigator } />
      <Drawer.Screen name="SettingScreen"  component={ SettingScreen } />
    </Drawer.Navigator>
  );
}

{/* <Drawer.Navigator 
    screenOptions={{drawerPosition:'right'}}
> */}

const MenuInterno = ( props: DrawerContentComponentProps<DrawerContentOptions>) => {

  return (
    <DrawerContentScrollView>
        <View style={styles.avatarContainer}>
          <Image 
            source={{
              uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
            }}
            style={ styles.avatar}
          />

        </View>
    </DrawerContentScrollView>
  );
}