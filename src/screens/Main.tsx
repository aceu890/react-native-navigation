import React, { useEffect } from 'react';
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
// import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';      

// interface Props extends StackScreenProps<any, any> { };
interface Props extends DrawerScreenProps<any, any> { };         


export const Pagina1Screen = ({ navigation }: Props) => {

  // MENU DE HAMBURGUESA MANUAL
  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <Button 
  //         title='Menú'
  //         onPress={ () => navigation.toggleDrawer()}
  //       />
  //     )
  //   })
  // }, [])
  
  return (
    <View style={styles.globalMargin}>
      {/* <Text style={styles.title}>Pagina1Screen</Text> */}

      {/* <Button
        title="Ir página 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      /> */}

      <Text style={{
        marginVertical: 20,
        fontSize: 20,
        marginLeft: 5,
        textAlign:'center',
      }}>
        LIGA SAN ANTONIO
        </Text>

      <View style={ styles.navbar}>

        <TouchableOpacity
          style={{
            ...styles.botonGrande,

          }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'pedro'
          })}
        >
          <Text style={styles.botonGrandeTexto}>TABLA</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.botonGrande,
          }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Maria'
          })}
        >
          <Text style={styles.botonGrandeTexto}>GOLES</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.botonGrande,
          }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Maria'
          })}
        >
          <Text style={styles.botonGrandeTexto}>ASISTENCIAS</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.botonGrande,
          }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Maria'
          })}
        >
          <Text style={styles.botonGrandeTexto}>NOTICIAS</Text>
        </TouchableOpacity>

      </View>


{/* TODO: STACK DE EQUIPOS DE SAN ANTONIO - ROW: 1*/}
      <View style={ styles.teamBoxContainer}>
      <TouchableOpacity
          style={ styles.teamBox}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Maria'
          })}
        >
      <Image
        source={{uri: 'https://www.mirafutbol.com/futebol/8001152/800fe0_sanjuan.png'}}
        style={ styles.imgStyle}
      />
        
        </TouchableOpacity>
        <TouchableOpacity
          style={ styles.teamBox}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Maria'
          })}
        >
                              <Image
                      source={{uri: 'https://www.mirafutbol.com/futebol/8001152/41f1b7_garciahuidobro.png'}}
                      style={ styles.imgStyle}
                    />
        </TouchableOpacity>
        <TouchableOpacity
          style={ styles.teamBox}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Maria'
          })}
        >
                              <Image
      
      source={{uri: 'https://www.mirafutbol.com/futebol/8001152/342ab6_bellohorizonte.png'}}
      style={ styles.imgStyle}
    />
        </TouchableOpacity>
      </View>

      {/* TODO: STACK DE EQUIPOS DE SAN ANTONIO - ROW: 2*/}
      <View style={ styles.teamBoxContainer}>
      <TouchableOpacity
          style={ styles.teamBox}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Maria'
          })}
        >
                              <Image
      
      source={{uri: 'https://www.mirafutbol.com/futebol/8001152/fe2347_juanasppe.png'}}
      style={ styles.imgStyle}
    />
        </TouchableOpacity>
        <TouchableOpacity
          style={ styles.teamBox}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Maria'
          })}
        >
                              <Image
      
      source={{uri: 'https://www.mirafutbol.com/futebol/8001152/f9e022_laurobarros.png'}}
      style={ styles.imgStyle}
    />
        </TouchableOpacity>
        <TouchableOpacity
          style={ styles.teamBox}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Maria'
          })}
        >
                              <Image
      
      source={{uri: 'https://www.mirafutbol.com/futebol/8001152/8108dc_norteamerica.png'}}
      style={ styles.imgStyle}
    />
        </TouchableOpacity>
      </View>

      {/* TODO: STACK DE EQUIPOS DE SAN ANTONIO - ROW: 3*/}
      <View style={ styles.teamBoxContainer}>
      <TouchableOpacity
          style={ styles.teamBox}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Maria'
          })}
        >
                              <Image
      
      source={{uri: 'https://www.mirafutbol.com/futebol/8001152/92658d_pedroaguirre.png'}}
      style={ styles.imgStyle}
    />
        </TouchableOpacity>
        <TouchableOpacity
          style={ styles.teamBox}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Maria'
          })}
        >
                                <Image
      
      source={{uri: 'https://www.mirafutbol.com/futebol/8001152/17a694_cerroalegre.png'}}
      style={ styles.imgStyle}
    />
        </TouchableOpacity>
        <TouchableOpacity
          style={ styles.teamBox}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Maria'
          })}
        >
                                <Image
      
      source={{uri: 'https://www.mirafutbol.com/futebol/8001152/bfd7cf_lasdunas.png'}}
      style={ styles.imgStyle}
    />
        </TouchableOpacity>
      </View>

      {/* TODO: STACK DE EQUIPOS DE SAN ANTONIO - ROW: 4*/}
      <View style={ styles.teamBoxContainer}>
      <TouchableOpacity
          style={ styles.teamBox}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Maria'
          })}
        >
                               <Image
      
      source={{uri: 'https://www.mirafutbol.com/futebol/8001152/800fe0_sanjuan.png'}}
      style={ styles.imgStyle}
    />
        </TouchableOpacity>
        <TouchableOpacity
          style={ styles.teamBox}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Maria'
          })}
        >
                                <Image
      
      source={{uri: 'https://www.mirafutbol.com/futebol/8001152/8c3560_torino.png'}}
      style={ styles.imgStyle}
    />
        </TouchableOpacity>

      </View>
    </View>
  );
};
