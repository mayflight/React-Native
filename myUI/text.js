/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';



export default class UIText extends Component {
  state = {
    text:'文本测试'
  }

  render() {
    return (
      <View>
          <Text style={styles.indicator} onPress={() => this.setState({text:"点击了按钮啊"})}>
          {this.state.text}
          <Text style={{color:'green',fontSize:30}}>{this.props.text}</Text>
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  indicator:{
    flexDirection:'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    color: 'red',
    paddingTop:50,
    elevation:120,
    fontStyle:'italic',
    fontWeight:'bold',
    textDecorationLine:'line-through',
    textDecorationStyle:'double',
    textDecorationColor:'#f3f2f3',
    textAlign:'center',
    lineHeight:60,
    textShadowColor:'#00cccc',
    textShadowRadius:8,
    writingDirection:'ltr',
    textShadowOffset:{width:2,height:2}
  }
});

