import React from 'react'
import { useProductContext } from '../Context/ProductContext';

const Loader = () => {
    // function load() {
    //     if(loading === true){
    //         <span class="loader"></span>
    //     }

    //     else{
    //         console.log("error")
    //     }
    // }

    // load();

  const { isloading } = useProductContext();

  if(isloading === true){

    <span class="loader"></span>

  }

  else{
    <h1>error</h1>
    console.log("eroro")
  }
  
  return (
    <>
    <span class="loader"></span>
     
    </>
  )
}

export default Loader
