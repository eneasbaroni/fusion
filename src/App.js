import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import "./grid.css"
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>      
      <div className="App">
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>  
        <Footer/>      
      </div>
    </BrowserRouter>
  );
}

export default App;
