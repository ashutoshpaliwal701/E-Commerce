import react from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './component/Home/Header/Header';
import Subhead from './component/Home/Header/SubHead';
import BrandImage from './component/Home/BrandImage';
import FeatureCatagory from './component/Home/catagory/FeatureCatagory';
import FeaturedItem from './component/Home/FeaturedItem';



function App() {
  return(<>
    <Router>
      <Header/>
      <Subhead/>
      <BrandImage/>
      <FeatureCatagory/>
      <FeaturedItem/>
      <h1>Footer</h1>
      <Routes>
        {/* <Route exact path='/' element={<Home/>}/>
        <Route exact path='/product' element={<Product/>}/> */}
      </Routes>
      {/* <Footer/> */}
    </Router>
  </>)
}

export default App
