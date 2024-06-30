import React from 'react';
import './subhead.css';
import { Link } from 'react-router-dom';

const Subhead = () => {
  return (
        <div className='subhead'>
            <div ><Link to="/"><button className='subhead_catagrory'>Home</button></Link></div>
            <div ><Link to="/shop"><button className='subhead_catagrory'>Shop</button></Link></div>
            <div ><Link to="/men"><button className='subhead_catagrory'>Mens</button></Link></div>
            <div ><Link to="/women"><button className='subhead_catagrory'>Womens</button></Link></div>
            <div ><Link to="/kids"><button className='subhead_catagrory'>Kids</button></Link></div>
        </div>
  )
}

export default Subhead;