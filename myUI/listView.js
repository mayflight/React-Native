import React,{Component} from 'react'
import {
	Text,
	ListView,
	StyleSheet,
	View
} from 'react-native'

export default class UIListView extends Component {
	constructor() {
		super()
		var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2})
		this.state = {
			dataSource:ds.cloneWithRows(['r1','r2','r2','r2','r5','r6','r7','r8'])
		}
	}	
	render() {
		return(
			<View>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={(rowData) => <Text>{rowData}</Text>}
				/>				
			</View>
		)
	}
}


