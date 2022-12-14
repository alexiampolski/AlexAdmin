import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { New } from "./pages/new/New";
import { Single } from "./pages/single/Single";
import { List } from "./pages/list/List";
import { Dashboard } from './pages/dashboard/Dashboard'
import {NoPage} from './pages/nopage/NoPage.jsx'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' >  
              <Route index element={<Home/>} />
              <Route path='login' element={<Login/>} />

              <Route path='users'>
                <Route index element={<List/>} />
                <Route path=":userId" element={<Single/>} />
                <Route path="new" element={<New/>} />
              </Route>  

              <Route path='products'>
                <Route index element={<List/>} />
                <Route path=":prodId" element={<Single/>} />
                <Route path="new" element={<New/>} />
              </Route>  

              <Route path='dashboard'>
                <Route index element={<Dashboard/>} />
              </Route>  
              <Route path='*'  element={<NoPage/>} />
                
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
