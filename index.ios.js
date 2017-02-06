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
import UICollectionView from './myUI/collectionView'
import LayoutFlexBox from './myUI/layoutFlexbox'
import Bridge from './myUI/bridge'
import UINavigator from './myUI/UINavigator'
import UIAlert from './myUI/alter'
import UIFetch from './myUI/UIFetch'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';


/**
  <UIImage/>
  <UITextInput/>
  <UIScrollView horizontal={true}></UIScrollView>
  <UIText text = {'子文本测试'}></UIText>
  <UISwitch open={true}/>
  <UIPickeriOS/>
  <UIListView/>
  <UICollectionView/>
  <LayoutFlexBox/>
  <Bridge/>
  <UINavigator/>
  <UIAlert/>
  <UIFetch/>
*/

export default class UICompent extends Component {
 
render() {
    return (
      <View style={styles.container}>
      <StatusBar hidden={false} networkActivityIndicatorVisible={false}/>
       <UIFetch/>
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
    flex:1
  },
});

AppRegistry.registerComponent('UICompent', () => UICompent);
