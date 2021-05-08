import React from 'react';
import Logo from './logo';
import {SoundInfo, PlaySound } from './playsound';
import DisplayPic from './displayPic';

import Snow from 'react-snow-effect';







const Animals=()=>{

   return(     
          <div>
            <Snow/>
            <Snow/>
            <Snow/>
            <Logo/>
            <h1>Learn Animal Names</h1> <h1>Click on the Picture</h1>
            <div className="animals">
           <SoundInfo>
            <DisplayPic
            sound="sounds/cat.mp3"
            img="image/cat1.png"/>
           <DisplayPic
            sound="sounds/dog.mp3"
            img="image/dog1.jpg"/>
            <DisplayPic
            sound="sounds/tiger.mp3"
            img="image/tiger.png"/>
            <DisplayPic
            sound="sounds/elephant.mp3"
            img="image/elephant.png"/>
            <DisplayPic
            sound="sounds/zebra.mp3"
            img="image/zebra.png"/> 
            <DisplayPic
            sound="sounds/cow.mp3"
            img="image/cow.png"/>
            <DisplayPic
            sound="sounds/monkey.mp3"
            img="image/monkey1.png"/>
            <DisplayPic
            sound="sounds/lion.mp3"
            img="image/lion.png"/>
            
            </SoundInfo>          
            
            </div>
        </div>
        
        )
    
}


export default Animals;

 
 
 
 