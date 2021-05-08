import React from 'react';
import Logo from './logo';
import {SoundInfo, PlaySound } from './playsound';


import Snow from 'react-snow-effect';




const Numbers=()=>{

   return(

        
    
       
           <div>
            <Snow/>
            <Snow/>
            <Snow/>
            <Logo/>
            <h1>Learn Number </h1> <h1>Click on the Number</h1>
            <div className="numbers">
            <SoundInfo>
            <PlaySound
            sound="sounds/1.mp3"
           item="1"/>
            <PlaySound
            sound="sounds/2.mp3"
           item="2"/>
            <PlaySound
            sound="sounds/3.mp3"
           item="3"/>
            <PlaySound
            sound="sounds/4.mp3"
           item="4"/>
            <PlaySound
            sound="sounds/5.mp3"
           item="5"/>
            <PlaySound
            sound="sounds/6.mp3"
           item="6"/>
            <PlaySound
            sound="sounds/7.mp3"
           item="7"/>
            <PlaySound
            sound="sounds/8.mp3"
           item="8"/>
            <PlaySound
            sound="sounds/9.mp3"
           item="9"/>
            <PlaySound
            sound="sounds/10.mp3"
           item="10"/>
            </SoundInfo>
            </div>
        </div>
        
        )
    
}
      



export default Numbers;
