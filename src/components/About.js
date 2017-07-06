import React, { Component } from 'react';


export default class About extends Component {




  static navigationOptions = {
      headerTitle: 'KUSF',
      headerTintColor: '#9EEFE5',
      headerTitleStyle: {
        color: '#9EEFE5',
        fontFamily: 'VT323',
        fontSize: 40,
      },
      headerStyle: {
        backgroundColor: '#162521',
      }
    };
    
  render() {
    return (

    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3C474B',
      // alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: '#C0E0DE',
    },
    contentButton: {
      color: '#3C474B'
    },
    cardText: {
      color: '#9EEFE5',
      fontFamily: 'VT323'
    },
    cardStyle : {
      backgroundColor: '#162521'
    }
  });

}
