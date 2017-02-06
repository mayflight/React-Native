import React,{Component} from 'react';
import {
	ListView,
	Text,
	View,
	StyleSheet,
	Alert,
	TouchableHighlight
} from 'react-native';

import Until from './until'

export default class UIFetch extends Component {


	state = {
		dataSource:[],
	}


	componentWillMount() {
		this.getData()
		var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2})
		this.setState({
			dataSource:ds.cloneWithRows(['1'])
		})
	}

	async getData() {
		try{
			let response = await fetch('https://sdk.jubaopay.com/api/getPayMethods.do',{
				method:'post',
				body:JSON.stringify({
					appId:'16956005', //16956005 49028593
					useApi:'false',
					sdkVersion:'3.0'
				})
			});
			let json = await response.json()
			if (response.ok) {
				this.setState({
					dataSource:this.state.dataSource.cloneWithRows(json.channels)
				})
			}
			
		}catch(error) {
			console.error(error)
		}
	}


	_renderRow(rowData,sectionID,rowID,highlightRow:(sectionID:number,rowID:number) => void) {
		return(
			<TouchableHighlight 
				underlayColor='red'
				onPress={
					() => highlightRow(sectionID,rowID)
				}
			>
				<View style = {styles.row}>
					<Text style={{elevation:120}}>{rowData.successUrl}</Text>
					<Text>{rowData.payChannel}</Text>
				</View>
			</TouchableHighlight>
		)
	}

	render() {
		return (
			<ListView 
					dataSource = {this.state.dataSource}
					renderRow = {this._renderRow.bind(this)}
					renderSeparator={(sectionID,rowID,adjacentRowHighlighted) => <View key={rowID+sectionID} style={{height:adjacentRowHighlighted ? 2:1 ,backgroundColor: adjacentRowHighlighted ? 'green':'red'}}/>}
				/>
				
		);
	}
}

const styles = StyleSheet.create({
	row:{
		flexDirection:'column',
		justifyContent:'flex-start',
		padding:10,
		flex:1,
		margin:10,
		backgroundColor:'#f6f6f6',
		width:Until.size.width,
		height:200
	},
})