import React from 'react';
import Logo from './logo';
import {SoundInfo, PlaySound } from './playsound';
import DisplayPic from './displayPic';

import Snow from 'react-snow-effect';



const Fruits  = () => {

   return(   
           <div>
           
           <Snow/>
            <Snow/>
            <Snow/>
            <Logo/>
            <h1>Learn Fruits Names </h1><h1>Click on the Picture </h1>
            <div className="fruits">
           <SoundInfo>
            <DisplayPic
            sound="sounds/mango.mp3"
            img="image/mango.png"/>

            
<DisplayPic
            sound="sounds/strawberry.mp3"
            img="image/strawberry.jpg"/>
           <DisplayPic
            sound="sounds/orange.mp3"
            img="image/orange.jpg"/>
            <DisplayPic
            sound="sounds/banana.mp3"
            img="image/banana.jpg"/>
            <DisplayPic
            sound="sounds/watermelon.mp3"
            img="image/watermelon.jpg"/> 
            
            <DisplayPic
            sound="sounds/apple.mp3"
            img="image/apple.jpg"/>

            <DisplayPic
            sound="sounds/grapes.mp3"
            img="image/grapes1.jpg"/>
            

            <DisplayPic
            sound="sounds/pomegranate.mp3"
            img="image/pomegranate.jpg"/>
            
            </SoundInfo>  
            </div>
           
        
        </div>

)
    
}



export default Fruits;