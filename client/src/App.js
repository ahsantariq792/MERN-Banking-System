// import logo from './logo.svg';
import UserList from './components/userlist'
import Transfer from './components/transfer.js' 
import TransferList from './components/transferlist' 
import Navbar from './components/navbar'
import Home from './components/home'

import {Route} from "react-router-dom"


import './App.css';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Route exact path="/"><Home></Home></Route>

      <Route exact path="/userlist"><UserList></UserList></Route>
      <Route  path="/transfer/:username"><Transfer></Transfer></Route>
      <Route exact path="/transferlist"><TransferList></TransferList></Route>



      {/* <Route exact path="/timetable"><TimeTable></TimeTable></Route> */}
      {/* <Route exact path="/showtimetable"><ShowTimeTable></ShowTimeTable></Route> */}

    </>
  );
}

export default App;
