 import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Shop from "./pages/Shop"
import ShopCaregory from "./pages/ShopCaregory"
import Product from "./pages/Product"
import LoginSingnup from "./pages/LoginSingnup"
import Card from "./pages/Card";
import Women from "./components/Women/Women.jsx"
import Footer from "./components/Footer.jsx";
import Kids from "./components/Kids/Kids.jsx";
 import Hero from "./components/Hero/Hero.jsx";
import Home from "./components/Home/Home.jsx";
import LoginSignup from "./pages/LoginSingnup.jsx"
function App() {
   

  return (
    <>
    <BrowserRouter> 
        <Navbar/>
<Routes>
<Route path="/" element={<><Home/> </>}/>
<Route path="/mens" element={<Hero/>}/> 

<Route path="/womens" element={<Women/>}></Route>
<Route path="/kids" element={<Kids/>}/>
<Route path="/product" element={<Product/>}/>
  <Route path="/login" element={<LoginSignup />} />

<Route path=":productId" element={<Product/>}/>

<Route path="/card" element={<Card/>}/>

<Route path="/login" element={<LoginSingnup/>}/>


</Routes>




    </BrowserRouter>
 <Footer/>
           </>
  )
}

export default App
