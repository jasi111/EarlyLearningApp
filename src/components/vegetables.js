import React from 'react';
import Logo from './logo';
import {SoundInfo, PlaySound } from './playsound';
import DisplayPic from './displayPic';


import Snow from 'react-snow-effect';




const Vegetables=()=>{

   return(

    <div>
           
    <Snow/>
     <Snow/>
     <Snow/>
     <Logo/>
     <h1>Learn Vegetables Names </h1><h1>Click on the Picture</h1>
     <div className="vegetables">
    <SoundInfo>
     <DisplayPic
     sound="sounds/carrot.mp3"
     img="image/carrot.png"/>
    <DisplayPic
     sound="sounds/tomato.mp3"
     img="image/tomato.jpg"/>
     <DisplayPic
     sound="sounds/potato.mp3"
     img="image/potato.png"/>
     <DisplayPic
     sound="sounds/cucumber.mp3"
     img="image/cucumber.png"/> 
     <DisplayPic
     sound="sounds/onion.mp3"
     img="image/onion.jpg"/> 
     <DisplayPic
     sound="sounds/brinjal.mp3"
     img="image/brinjal.png"/>
     <DisplayPic
     sound="sounds/beetroot.mp3"
     img="image/beetroot.png"/>
     <DisplayPic
     sound="sounds/pumpkin.mp3"
     img="image/pumpkin.png"/>
     </SoundInfo>  
    
     </div>
 </div>

)

}



export default Vegetables;
