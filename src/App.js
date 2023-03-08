// import './App.css';
import Home from './Components/Home';
import {Routes,Route} from "react-router-dom"
import Singlemovie from './Components/Singlemovie';
import Error from './Components/Error';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <div>
    <Routes>
      <Route>
        <Route path='/' element={<Home />}/>
        <Route path='movie/:id' element={<Singlemovie />}/>
        <Route path='*' element={<Error />}/>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
