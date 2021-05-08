import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route, Switch} from 'react-router-dom';//npm install react-router-dom
import Snow from './components/snow';
import MiddleNav from './components/middleNav';
import Loadable from 'react-loadable';


import ReactGA from 'react-ga';
ReactGA.initialize("UA-148812721-1");
ReactGA.pageview(window.location.pathname + window.location.search);


const Home = Loadable({
  loader: () =>
   import(/*webpackChunkName: "Home"*/"./components/Home"),
  loading:() => Home,
});

const Alphabets = Loadable({
  loader: () => import(/*webpackChunkName: "Alphabets"*/"./components/alphabets"),
  loading:() => Alphabets,
});

const Animals = Loadable({
  loader: () => import(/*webpackChunkName: "Animals"*/"./components/animals"),
  loading:() => Animals,
});

const Numbers = Loadable({
  loader: () => import(/*webpackChunkName: "Numbers"*/"./components/numbers"),
  loading:() => Numbers,
});

const Fruits = Loadable({
  loader: () => import(/*webpackChunkName: "Fruits"*/"./components/fruits"),
  loading:() => Fruits,
});

const Vegetables = Loadable({
  loader: () => import(/*webpackChunkName: "Vegetables"*/"./components/vegetables"),
  loading:() => Vegetables,
});



const App= () => {
  
return(
  
  
  <BrowserRouter>


  <Switch>

    
  <Route path="/" exact component={Home}/>
  <Route path="/alphabets" component={Alphabets}/>
  <Route path="/animals" component={Animals}/>
  <Route path="/numbers" component={Numbers}/>
  <Route path="/fruits" component={Fruits}/>
  <Route path="/vegetables" component={Vegetables}/>
  



  </Switch>
  
  
  </BrowserRouter>
  
)


}
export default App;