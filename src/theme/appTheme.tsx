import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    globalMargin: {
        flex:1,
        marginHorizontal: 20,
    },
    title: {
        fontSize: 30,
        marginBottom: 10
    },
    botonGrande: {
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',   
        marginRight: 10,
    },
    // COLOR DEL NAVBAR
    botonGrandeTexto: {
        color: '#2a0055',
        fontSize: 10,
        fontWeight: 'bold',    
    },
    avatarContainer: {
        alignItems: 'center',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 50,
    },
    menuBoton: {
        marginVertical: 10,
        
    },
    menuTexto: {
        fontSize: 20,
    },

// TABLA - GOLES - ASISTENCIAS - NOTICIAS
    navbar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 10,
    }, 
    // EQUIPO INDIVIDUAL 
    teamBox: {
        width: 120,
        height: 80,
        backgroundColor: '#F3FAFA',

        // backgroundColor: 'yellow',
        // borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: 'grey',
        borderRadius: 100,

    },
    // SOLO UNA ROW DE EQUIPOS (CONTIENE 3) 
    teamBoxContainer: {
        marginVertical: 20,
        flexDirection: 'row',
        gap: 10,
    },         
    imgStyle: {
        alignSelf: 'center',
        
        width: 70,
        height: 70,
        marginTop: 30,
    },
    

});