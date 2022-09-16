import './App.css';
import { store } from './store/store'
import { Provider } from 'react-redux'
import DisplayData from './Components/DisplayData';
import { Counter } from './Components/Counter';
import Pokemon from './Components/Pokemon';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <DisplayData />
        <Counter />
        <Pokemon />
      </Provider>
    </div>
  );
}

export default App;
