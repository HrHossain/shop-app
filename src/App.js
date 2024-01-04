import {React, Fragment, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import './App.css';
import About from './component/About/About';
import Blog from './component/Blog/Blog';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import NoPage from './component/Pages/Nopage/NoPage';
import Service from './component/Service/Service';
import Team from './component/Team/Team';




function App(){
  const[progress,setProgress]=useState(0)
  return(
    
   <Fragment>
<LoadingBar
color='#f11946'
progress={progress}
onLoaderFinished={() => setProgress(0)}
height={3}
animationTime={500}
/>

<BrowserRouter>
<Header setProgress={setProgress} progress={progress}></Header>
<Routes>
  <Route  path='/' element={<Home></Home>}/>
  <Route  path='/service' element={<Service></Service>}/>
  <Route  path='/about' element={<About></About>}/>
  <Route  path='/blog' element={<Blog></Blog>}/>
  <Route  path='/team' element={<Team></Team>}/>
  <Route path='/nopage' element={<NoPage></NoPage>}/>
</Routes>

<Footer></Footer>
</BrowserRouter>

























     
    
   </Fragment>
  )
}
export default App;