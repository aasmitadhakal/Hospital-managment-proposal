import './App.css';
import {Route,Routes} from 'react-router-dom';
import Dashboard from './Component/Dashboard';
import Sidebar from './Component/Sidebar';
import Tabs from './Component/Tabs';
// import InnerContent from './InnerContent';
import { Tabs1 } from './Component/Tabs';
import { Family } from './Component/Tabs';
// import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="">
    <h1>hello world  sss hloooooasmita dhakal rrragain chang hey hlo</h1>
    <Routes>
      {/* <Navbar /> */}
    <Route path ='/' element = {<Sidebar/>} />
      <Route path ='/dashboard' element = {<Dashboard/>} />
      <Route path='/tabs' element = {<Tabs/>} >
        <Route path ='tab1' element ={<Tabs1/>} >
          <Route path='dhakal' element ={<Family />} />
        </Route>
        </Route>
      {/* <Route path='/innercontent' element={<InnerContent/>} /> */}
    </Routes>

    </div>
  );
}

export default App;
