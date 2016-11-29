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


var titles = ['r1','r2','r3','r4','r5','r6','r7','r8','r9','r10','r11','r12','r2','r3','r4','r5','r6','r7','r8','r9','r10','r11','r12']
var imageurls = [
					require('../myResource/myimage.jpg'),
					require('../myResource/myimage.jpg'),
					require('../myResource/myimage.jpg'),
					require('../myResource/myimage.jpg'),
					require('../myResource/myimage.jpg'),
					require('../myResource/myimage.jpg'),
					require('../myResource/myimage.jpg'),
					require('../myResource/myimage.jpg'),
					require('../myResource/myimage.jpg'),
					require('../myResource/myimage.jpg'),
					require('../myResource/myimage.jpg'),
					require('../myResource/myimage.jpg'),
					require('../myResource/myimage.jpg'),
					require('../myResource/myimage.jpg'),
					require('../myResource/myimage.jpg'),
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
			<View style={{flex:1}}>
			<Text>{this.state.text}</Text>
				<ListView
					contentContainerStyle={styles.list}
					dataSource={this.state.dataSource}
					renderRow={this._myrenderRow}
					initialListSize={5}
					scrollRenderAheadDistance={100}
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
	list:{
		justifyContent:'space-around',
		flexDirection:'row',
		flexWrap:'wrap',
		alignItems:'flex-start'
	},
	row:{
		flexDirection:'column',
		justifyContent:'center',
		padding:5,
		margin:5,
		flex:1,
		backgroundColor:'#f6f6f6',
		width:100,
		height:100,
		alignItems:'center',
		borderRadius:50
	},
	image :{
		width:60,
		height:60,
		paddingTop:5
	},
	text:{
		marginTop:2,
		textAlign:'center',
		fontSize:20,
		color:'red',
		fontWeight:'bold',
	}
})

