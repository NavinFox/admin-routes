
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import List from './pages/list/List'
import New from './pages/new/New'
import Single from './pages/single/Single'
import Visitors from './pages/visitors/Visitors'
import NewVisitors from './pages/newvisitors/NewVisitors'
import VisitorsList from './pages/visitorslist/Visitorslist'
import "./style/dark.scss"
import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";
import { userInputs, productInputs } from './formsource'
import { DarkModeContext } from './context/darkModeContext'
import { useContext } from 'react'


function App() {
  
  const {darkMode} = useContext(DarkModeContext);


  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
           <Route path="/login" element={<Login/>} />
            <Route index element={<Home/> }/>
              <Route path="users">
              <Route index element={<List/>}/>
              <Route path=":userId" element={<Single/>}/>
              <Route path="new" element={<New inputs={userInputs} title="Add New Users" />}/>
              </Route>
                <Route path="visitors">
                <Route index element={ <VisitorsList  />}/>
                <Route path=":visitorsId" element={<Visitors/> }/>
                <Route path="newVisitors" element={ <NewVisitors inputs={productInputs} title="Add New Visitors"/>}/>
                </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
