import React from 'react';

class TodoItem extends React.Component {
	handleItemClick = (e) => {
		const { onItemClick } = this.props;
		onItemClick(e.target.id);
	}

	render() {
		const {
			children,
			id,
			status,
		} = this.props;
		
		return(
			<li
				id={id}
				onClick={this.handleItemClick}
				data-status={status}
				// 如果完成加上刪除線
				style={
                  status ? 
                  { textDecoration: 'line-through' } : 
                  { textDecoration: 'none' }
                }
			>
				{children}
			</li>
		);
	}
}

export default TodoItem;