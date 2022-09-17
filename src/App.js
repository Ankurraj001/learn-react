import './App.css';
import { store } from './store/store'
import { Provider } from 'react-redux'
import DisplayData from './Components/DisplayData';
import { Counter } from './Components/Counter';
import Pokemon from './Components/Pokemon';
import { Button } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <DisplayData />
        <Counter />
        <Pokemon />
        <Button component="label">Download <input hidden accept="image/*" multiple type="file" /></Button>
      </Provider>
    </div>
  );
}

export default App;
