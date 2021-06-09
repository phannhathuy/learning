import './App.css';
import './css/bootstrap.min.css';
import Header from './components/header/header';
import Clicker from './components/clicker/clicker';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <Header title='The React Clicker' />
      <Clicker />
    </div>
  )
}

export default App;
