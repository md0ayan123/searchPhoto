
import {useState,useEffect} from "react";
import axios from "axios"

const count =1 
    
 export function LoadImages(){
      const[state,setState]=useState([]) 
      useEffect(()=>{
        axios.get( `https://api.unsplash.com/photos?client_id=LSo0-t_QtnFPrIYh4P7-J596aYvXtEBwHEvdE6rW11E`)
        .then((data)=>{
          setState(data.data);
          console.log(setState);
      })

      },[count])
      return state;


     }

    export function SearchImages(query){
      const[state,setState]=useState([])
            useEffect(()=>{
        axios.get( `https://api.unsplash.com/search/photos?query=${query}&client_id=LSo0-t_QtnFPrIYh4P7-J596aYvXtEBwHEvdE6rW11E`)
        .then((data)=>{
      setState(data.data.results)        
      })
      
      },[query])
      return state;
    }
   
  // function ShowMore(query){ 
  //   const[state,setState]=useState([])
  //   const[page,setPage]=useState(1)
  //    useEffect(()=>{
  //   axios.get(`https://api.unsplash.com/search/photos?query=${query}&client_id=LSo0-t_QtnFPrIYh4P7-J596aYvXtEBwHEvdE6rW11E&page=${page+1}`)
  //   .then((data)=>{
  //     setState(data.data)
  //     setPage(page+1)
  //       LoadImages()
  //     })
  //    },[query])
  //  }


  
  
        

    
     
     
    
    export default {LoadImages,SearchImages};