import {Header} from "./layouts/header";
import {Card} from "./pages/Card";
import {Routes, Route, BrowserRouter} from "react-router-dom"
import {Weapons} from "./pages/Weapons";

function App() {
  return  <>
   <BrowserRouter>
       <Header />
       <Routes>
         <Route path="/" element={<Card />} />
         <Route path="/weapons" element={<Weapons />} />
       </Routes>
   </BrowserRouter>
  </>


}

export default App;
