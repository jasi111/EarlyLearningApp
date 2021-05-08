import React from 'react';
import {Link} from 'react-router-dom';
import Snowf from 'react-snowf';
import Snow from 'react-snow-effect';
import Logo from './logo';
import FrontNav from './FrontNav';
import {Helmet} from "react-helmet";


const Home = () =>{
    return( 
        <div>
        <Helmet>
        <title>Little For Little</title>
        <meta name="description" content="Learn alphabets,numbers, animals, fruits and vegetables names
    for toddlers or kindergarten or early learning students" />
    </Helmet>    
       <FrontNav/>
        
        </div>
        )}

export default Home;