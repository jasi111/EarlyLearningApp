import React from 'react';
import {Link} from 'react-router-dom';
const Logo=()=>{

    return(
        

        <div className="logo sticky-top">

            
            <Link to="/"> <img className="logosize" src="image/lg.png" />           
            </Link>
        

           

           
           
        </div>
    )
}

export default Logo;