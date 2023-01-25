import {Header} from "./layouts/header";
import {Agents} from "./pages/Agents";
import {Routes, Route, BrowserRouter} from "react-router-dom"
import {Weapons} from "./pages/Weapons";
import {Agent} from "./pages/Agent";

function App() {
  return  <>
   <BrowserRouter>
       <Header />
       <Routes>
             <Route path="/" element={<Agents />} />
             <Route path="/weapons" element={<Weapons />} />
             <Route path="/agents/:uuid" element={< Agent />} />
       </Routes>
   </BrowserRouter>
  </>

}

export default App;
