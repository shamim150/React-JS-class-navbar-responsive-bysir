import React from 'react'


import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayOut from './components/layer/RootLayOut';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Contact from './components/pages/Contact';
import Journal from './components/pages/Journal';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayOut />}>

      <Route index element = {<Home/>}/>
   
      <Route path='/shop' element = {<Shop/>}> </Route>
      <Route path='/contact' element = {<Contact/>}> </Route>
      <Route path='/journal' element = {<Journal/>}> </Route>
      
    </Route>
  )
);





const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App