import React,{Component} from 'react'
import Until from './until'
import {
	Text,
	ListView,
	StyleSheet,
	View,
	TouchableHighlight,
	Image
} from 'react-native'


var titles = ['r1','r2','r2','r2','r5','r6','r7','r8']
var imageurls = [
					require('../myResource/myimage.jpg'),
					require('../myResource/myimage.jpg'),
					require('../myResource/myimage.jpg'),
					require('../myResource/myimage.jpg'),
					require('../myResource/myimage.jpg'),
					require('../myResource/myimage.jpg'),
					require('../myResource/myimage.jpg'),
					require('../myResource/myimage.jpg')
				]
export default class UIListView extends Component {
	constructor() {
		super()
		var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2})
		this.state = {
			dataSource:ds.cloneWithRows(titles),
			text:'列表'
		}
	}



	render() {
		return(
			<View>
			<Text>{this.state.text}</Text>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={this._myrenderRow}
					renderSeparator={(sectionID,rowID,adjacentRowHighlighted) => <View key={rowID+sectionID} style={{height:adjacentRowHighlighted ? 2:1 ,backgroundColor: adjacentRowHighlighted ? 'green':'red'}}/>}
				/>				
			</View>
		)
	}

	_press(rowID) {
		this.setState({
			text:'点击了'+rowID
		})
	}
	_myrenderRow (rowData:string,sectionID:number,rowID:number,highlightRow:(sectionID:number,rowID:number) => void) {
		return(
			<TouchableHighlight 
				underlayColor='burlywood'
				onPress={() => {
					highlightRow(sectionID,rowID)
				}}
			>	
				<View>
					<View style={styles.row}>
						<Image source={imageurls[rowID]} style={styles.image} />
						<Text style = {styles.text}>
							{rowData+':'+rowID}
						</Text>
					</View>
				</View>
			</TouchableHighlight>
			)
    }
}
const styles = StyleSheet.create({
	row:{
		flexDirection:'row',
		justifyContent:'flex-start',
		padding:10,
		flex:1,
		backgroundColor:'#f6f6f6',
		width:Until.size.width
	},
	image :{
		width:80,
		height:80
	},
	text:{
		marginLeft:40,
		paddingTop:30,
		textAlign:'center',
		fontSize:20,
		color:'red',
		fontWeight:'bold',
		borderWidth:2,
		borderColor:'green',
		width:100,
	}
})

