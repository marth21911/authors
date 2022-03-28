import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Switch, Link, Route} from 'react-router-dom'
import Main from './views/Main';

function App() {
  return (
    <div className="App">
        <Main/>
    </div>
  );
}

export default App;
