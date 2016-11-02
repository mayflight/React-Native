/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import UIText from './myUI/text'
import UIImage from './myUI/image'
import UITextInput from './myUI/textInput'
import UIScrollView from './myUI/scrollView'
import UISwitch from './myUI/switch'
import UIPickeriOS from './myUI/pickerios'
import UITouchAble from './myUI/touchable'
import UIListView from './myUI/listView'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


/**
  <UIImage/>
  <UITextInput/>
  <UIScrollView horizontal={true}></UIScrollView>
  <UIText text = {'子文本测试'}></UIText>
  <UISwitch open={true}/>
  <UIPickeriOS/>
*/

export default class UICompent extends Component {
 
render() {
    return (
      <View style={styles.container}>
        <UIText text = {'文本测试'}></UIText> 
        <UIListView/> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding:10,
    margin:10,
  },
});

AppRegistry.registerComponent('UICompent', () => UICompent);
