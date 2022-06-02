import React from 'react';
import TodoList from './component/TodoList';

// functional(stateless) Component寫法
// 如果此Component沒有要state或是其他生命週期方法可以這樣寫
const App = () => (
  <TodoList />
);

export default App;