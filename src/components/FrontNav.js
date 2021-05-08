import React from 'react';
import {Link} from 'react-router-dom';
import Home from './Home';
import Snow from 'react-snow-effect';
import Logo from './logo';

const FrontNav =() => {

    return(
        
    <div className="navContainer">
<Snow/>
<Logo/>

<div className="movetop">

    <div className="firstrow container"> 

   
      <div className="col-sm"><Link className="frontnav alpha" to="/alphabets">Alphabets</Link></div>
      <div className="col-sm"><Link className="frontnav" to="/numbers">Numbers</Link></div>
  
    </div>
    

    <div className="secondrow container"> 
       
      <div className="col-sm"><Link className="frontnav" to="/animals">Animals</Link></div>
      <div className="col-sm"><Link className="frontnav fruit" to="/fruits">Fruits</Link></div>
      <div className="col-sm"><Link className="frontnav veg" to="/vegetables">Vegetables</Link></div>

    </div>
    
    </div>
     
    </div>
    )
}

export default FrontNav;