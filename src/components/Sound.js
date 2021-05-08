import React from 'react';
import Sound from 'react-sound';

const TestSound =(prop)=> { 
   
    const playSound=()=>{
        let sound = new Audio();
        sound.src = prop.sound;
        sound.play();
    }
        
    
      


    return(
        
        <a href="#" onClick={playSound} class="alphabets"> <h2>{prop.item}</h2></a> 
       
        

       
        )
  }

                      
export default TestSound;  