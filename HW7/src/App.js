import logo from './logo.svg';
import './App.css';
import Block1 from './components/Block1';
import Block2 from './components/Block2';
import Login from './components/Login';



function App() {
  return (
    <div className="App">
      <h3>CGU Login</h3>
      <Block1 />
      <Block2 />
      <br/>
      <br/>
      <Login />
    </div>
  );
}

export default App;
