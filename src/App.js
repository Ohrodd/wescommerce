import './App.css';
import { Route, Routes, HashRouter} from "react-router-dom";
import Principal from './components/principal';
import Navbar from './components/navbar';
import { Login, Register } from './components/access';
import Error404 from './components/error404';


function App() {
  return (
    <section>
      <HashRouter>
        <Navbar/>
        <div className='contentgeneral'>
          <Routes>
            <Route path='/' element={<Principal/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>}/>
            <Route path='*' element={<Error404/>}/>
          </Routes>
        </div>
      </HashRouter>
    </section>
  );
}

export default App;
