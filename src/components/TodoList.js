import React, { useState } from 'react';

const TodoList = () => {
	const [newTodo, setNewTodo] = useState('');
	const [items, setItems] = useState([]);

	function addIyem() {
		if (!newTodo) {
			alert('Enter todo');
			return;
		}

		const item = {
			id: Math.floor(Math.random() * 10000),
			value: newTodo,
		};

		setItems((oldList) => [...oldList, item]);
		setNewTodo('');
	}

	function deleteItem(id) {
		const newArr = items.filter((item) => item.id !== id);
		setItems(newArr);
		console.log(items);
	}

	return (
		<div>
			<h1>Todo List App</h1>

			<input type="text" placeholder="Add todo" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />

			<button onClick={addIyem}>Add</button>

			<ul>
				{items.map((item) => {
					return (
						<li key={item.id}>
							{item.value}
							<button onClick={() => deleteItem(item.id)}>x</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default TodoList;
