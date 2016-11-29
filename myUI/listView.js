import React,{Component} from 'react'
import Until from './until'
import {
	Text,
	ListView,
	StyleSheet,
	View,
	TouchableHighlight,
	Image,
	RecyclerViewBackedScrollView,
	ScrollView
} from 'react-native'


var titles = ['r1','r2','r3','r4','r5','r6','r7','r8','r9','r10','r11','r12','r21','r22','r23','r24','r25','r26','r27','r28','r29','r210','r211','r212']
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
					require('../myResource/myimage.jpg'),
					require('../myResource/myimage.jpg'),
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
				showsVerticalScrollIndicator={true}
				dataSource={this.state.dataSource}
				renderRow={this._myrenderRow.bind(this)}
				onEndReachedThreshold={5}					
				onEndReached={this._endReached.bind(this)}
				renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
				renderSeparator={(sectionID,rowID,adjacentRowHighlighted) => <View key={rowID+sectionID} style={{height:adjacentRowHighlighted ? 2:1 ,backgroundColor: adjacentRowHighlighted ? 'green':'red'}}/>}
			/>				
			</View>
		)
	}
	_endReached() {
		this.setState({
			text:'滑动到底了'
		})
	}
	_press(rowID){
		titles[rowID]="点击了："+rowID
		this.setState({
			text:titles[rowID],
			dataSource:this.state.dataSource.cloneWithRows(titles.fill("dd",1,8))
		})
	}
	_myrenderRow (rowData:string,sectionID:number,rowID:number,highlightRow:(sectionID:number,rowID:number) => void) {
		return(
			<TouchableHighlight 
				underlayColor='burlywood'
				onPress={() => {
					highlightRow(sectionID,rowID)
					this._press(rowID)
				}}
			>	
				<View>
					<View style={styles.row}>
						<Image source={imageurls[rowID]} style={styles.image} />
						<Text style = {styles.text}>
							{rowData+";"+rowID+";"+sectionID}
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
		width:Until.size.width,
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

