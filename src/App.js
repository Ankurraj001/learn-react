import './App.css';
import Router from './Components/Router';
import { BrowserRouter as Routes} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Router />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
