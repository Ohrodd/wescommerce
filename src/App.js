import './App.css';
import { Route, Routes} from "react-router-dom";
import Principal from './components/principal';
import Navbar from './components/navbar';
import { Login, Register } from './components/access';


function App() {
  return (
    <section>
      {<Navbar/>}
      <div className='contentgeneral'>
        <Routes>
          <Route path='/wescommerce/' element={<Principal/>} />
          <Route path='/wescommerce/login' element={<Login/>} />
          <Route path='/wescommerce/register' element={<Register/>}/>
        </Routes>
      </div>
    </section>
  );
}

export default App;
