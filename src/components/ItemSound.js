import React from 'react';

export const ItemSound= (prop) => {
    
        const playSound=()=>{
            let sound = new Audio();
            sound.src = prop.sound;
            sound.play();
        }
    return(
    
    <div className="displayItem">
        <div className="container">
    <a href="#" onClick={playSound}> 
    <h1>{prop.item}</h1>
    
    </a> 
    </div>      
    </div>
            )
      }

export const ItemSoundInfo= (prop) => {
    return(
        <div className="displayItem">
            <div className="container">

                {prop.children}
            </div>

        </div>
    )
}

  export default ItemSound; 