

import React,{ useState} from 'react'
import {LoadImages,SearchImages} from'./Components/api'
import ImageProps from './Components/ImageProps'




function App() {  
 
  const[query,setQuery]=useState()
  const[searchQ,setSearch]=useState()
 


   
  const data =LoadImages(); 
  const search=()=>{
     setSearch(query)
   }
   const searchData =SearchImages(searchQ); 
   console.log(searchData);
  


  return(
  

  <>
             
      <h1 className='container my-5' style={{textAlign:'center'}} >Image Search</h1>
   <nav className="navbar bg-body-tertiary" >
  <div className="container-fluid "style={{justifyContent:'center'}} >

      <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(event)=>
      setQuery(event.target.value) 
      }/>
      <button onClick={search}type="button" className="btn btn-outline-success">Search</button>
      </form>
      </div>
   
      <div className="container" >
    <div className="row text-center text-lg-start " >
   
      {searchQ?searchData.map((element,key)=>(      
      <div className='col-md-4' ><ImageProps key={key} imageUrl={element.urls.small} click={element.links.download} description={element.description ? element.description : "Get a few caption ideas with AI. Try it multiple times until you find the right caption."} /></div>
      ))
       :data?.map((element,key)=>(     
      <div className='col-md-4' ><ImageProps key={key} imageUrl={element.urls.small} click={element.links.download }description={element.description ? element.description : "Get a few caption ideas with AI. Try it multiple times until you find the right caption."} /></div>))
          
      }
     
      </div>  
     </div> 
 </nav> 
 </>  
);

      }
    

      
    export default App  
    
    
   

 
 

  
 


    


