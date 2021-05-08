import React from 'react';

const DisplayPic = (prop) => {
    
        const playSound=()=>{
            let sound = new Audio();
            sound.src = prop.sound;
            sound.play();
        }
    return(
    
    <div>
    <a href="#" onClick={playSound}>
    <img className="imgDisplay" src={prop.img}/>
    </a> 
    </div>      
            )
      }

      export default DisplayPic;