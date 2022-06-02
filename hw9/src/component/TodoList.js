import React from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  constructor(props) {
		super(props);
			// 設定state
			// list裡面是個[]，存放一個item物件
			// 物件格式如下
			// {
			//  	id,
			//    text,
			//    status,
			// }
      this.state = {
      list: [],
    };
	}
	// additem函式
	addItem = (text) => {
		const { list } = this.state;
		//　input value要不為''才可以執行
        if (text !== '') {
        　　　// Array.concat可以合併兩個陣列，並回傳一個新陣列物件
			const tempArr = list.concat({
				id: list.length + 1,
				text,　//　如果你的key和value都一樣名字可以省略這樣寫
				status: false,
			});
			this.setState({
				list: tempArr,
			});
		}
	}
　　// toggle item狀態函式
	toggleStatus = (id) => {
		const { list } = this.state;
		const tempArr = list.map(item => {
        　　// 比對是否有對應id
			if(item.id.toString() === id.toString()) {
				return ({
					id: item.id,
					text: item.text,
					status: !item.status,
				});
			}
			return item;
		});
		this.setState({
			list: tempArr,
		});
	}

	render() {
		const { list } = this.state;
		const divStyle = {
			width: '250px',
			margin: 'auto',
			textAlign: 'center',
		}; 
		return(
			<div style={divStyle}>
				<TodoForm onAddItem={this.addItem}  />
				<ul>
					{list.map(item => (
						<TodoItem
							key={item.id} // 一定要有
							id={item.id}
							status={item.status}
							onItemClick={this.toggleStatus}
						>
							{item.text}
						</TodoItem>
					))}
				</ul>
			</div>
		);
	}
}

export default TodoList;