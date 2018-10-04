import React from 'react';
import { Text, View } from "react-native";

const Header = (props) => {
  const { textStyle , viewStyle } = styles;
  return (
    <View style ={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    display:'flex',
    alignItems:'center',
    justifyContent: 'center',
    height:75,
    paddingTop:20,
    shadowColor:'#000', 
    shadowOffset:{width:0 , height:4},
    shadowOpacity:0.2,
    elevation:2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    color:'#000'
  } 
};

export {Header};
