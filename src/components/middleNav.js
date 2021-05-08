import React from 'react';
import {Link} from 'react-router-dom';
import Snow from 'react-snow-effect';

import FrontNav from './FrontNav';


const MiddleNav= () =>{
    return( 
        <div>
       <FrontNav/>
        <Snow/>
        

       
        <div className="main bg">
        
                
        <div className= "navFirstline">
        
        <Link className="alphabets" to="/alphabets">Alphabets</Link>
        <Link className="numbers" to="/numbers">Numbers</Link>
        
        </div>

        <div>
        <Link className="vegetables" to="/vegetables">Vegetables</Link>
        <Link className="fruits" to="/fruits">Fruits</Link>
        <Link className="animals" to="/animals">Animals</Link>
        
        </div>
        </div>
        </div>
    )
}



export default MiddleNav;