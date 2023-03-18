import React,{useState,useEffect} from 'react'
import { getFirestore,collection,addDoc, doc, getDocs } from 'firebase/firestore'
import { app, db } from '../context/firebaseconfig'


export const HomePage = () => {
 const[products,setProducts]=useState([])
 useEffect(()=>{
  getProducts()
 },[])

 useEffect(()=>{
  console.log(products)
 },[products])
 
 function getProducts(){
  
  const productcollectionRef=collection(db, 'ProductData')
  getDocs(productcollectionRef)
  .then(response=>{
    const prod=response.docs.map(doc=>({
      data:doc.data(),
      id:doc.id,
    }))
    setProducts(prod)
  })
  .catch(error=>console.log(error.message))
}




  return (
    <div>
    HomePage
    <button onClick={()=>getProducts()}>all biscuits</button>
    <ul>
      {products.map(product=><li key={product.id}>{product.data.name} {product.data.review} {product.data.price}</li>)}
    </ul>
    </div>
  )
}
