import React from 'react';
import Logo from './logo';
import {SoundInfo, PlaySound } from './playsound';

import {Helmet} from "react-helmet";
import Snow from 'react-snow-effect';




const Alphabets=()=>{

   return(

        
    
       
           <div>
                   <Helmet>
        <title>Little For Little</title>
        <meta name="description" content="Learn A B C alphabets - for very little kids" />
    </Helmet> 
            <Snow/>
            <Snow/>
            <Snow/>
            <Logo/>
            <h1>Learn Alphabets </h1><h1> Click on the Letter </h1>
            <SoundInfo>
            <PlaySound
            sound="sounds/a.mp3"
           item="A"/>
            <PlaySound
            sound="sounds/b.mp3"
           item="B"/>
            <PlaySound
            sound="sounds/c.mp3"
           item="C"/>
            <PlaySound
            sound="sounds/d.mp3"
           item="D"/>
            <PlaySound
            sound="sounds/e.mp3"
           item="E"/>
            <PlaySound
            sound="sounds/f.mp3"
           item="F"/>
            <PlaySound
            sound="sounds/g.mp3"
           item="G"/>
            <PlaySound
            sound="sounds/h.mp3"
           item="H"/>
            <PlaySound
            sound="sounds/i.mp3"
           item="I"/>
            <PlaySound
            sound="sounds/j.mp3"
           item="J"/>
            <PlaySound
            sound="sounds/k.mp3"
           item="K"/>
            <PlaySound
            sound="sounds/l.mp3"
           item="L"/>
            <PlaySound
            sound="sounds/m.mp3"
           item="M"/>
            <PlaySound
            sound="sounds/n.mp3"
           item="N"/>
            <PlaySound
            sound="sounds/o.mp3"
           item="O"/>
            <PlaySound
            sound="sounds/p.mp3"
           item="P"/>
            <PlaySound
            sound="sounds/q.mp3"
           item="Q"/>
            <PlaySound
            sound="sounds/r.mp3"
           item="R"/>
            <PlaySound
            sound="sounds/s.mp3"
           item="S"/>
            <PlaySound
            sound="sounds/t.mp3"
           item="T"/>
            <PlaySound
            sound="sounds/u.mp3"
           item="U"/>
            <PlaySound
            sound="sounds/v.mp3"
           item="V"/>
           <PlaySound
            sound="sounds/w.mp3"
           item="W"/>
           <PlaySound
            sound="sounds/x.mp3"
           item="X"/>
           <PlaySound
            sound="sounds/y.mp3"
           item="Y"/>
           <PlaySound
            sound="sounds/z.mp3"
           item="Z"/>
           

           </SoundInfo>
       
        </div>
        
        )
    
}
      



export default Alphabets;

 
 
 
 