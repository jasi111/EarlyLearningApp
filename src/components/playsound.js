import React from 'react';

export const PlaySound = (prop) => {
    
//Defining function to play sound
//Setting prop for sound src.. using function
   const playSound=()=>{
            let sound = new Audio();
            sound.src = prop.sound;
            sound.play();
        }

//calling playsound function
   return(
    <div>
    <a href="#" onClick={playSound}> 
    <h2 className="textStyle">{prop.item}</h2>
    <img  src={prop.img}/>
    </a> 
    </div>      
        )
      }

export const SoundInfo = (prop) => {
        
 return (           
        
        <div id="itemAlign">             
            
                {prop.children}
            
                </div>
                
        )
      }
      
export default SoundInfo;  