import React, { useContext } from 'react'
import { useEffect,useState } from 'react';
import './Product.css'
import { ProductContext } from '../Contexts/productContext';


const product = (item,sectionName) => {
   
   const cardBtnClicked = () => {
      console.log("product item ===",item.name)
   }
   return (
      <div className="Products-card" key={item.id}>
         <div  key={item.name}>
         <img className="Products-Image" src={item.image}></img>
          </div>      
         <h2 className="Products-title">{item.name}</h2>
         <p className="Products-body">Price:{item.price}</p>
         <button className = "Products-CartBtn" type="button"  onClick={cardBtnClicked}>Add To Cart</button> 
         
      </div>
   );
}

function ProductItems(props)  {
   const [itemAdded,setitemAdded] = useState(false)
   const cardBtnClicked = () => {
      console.log("product item ===",props.item.name)
      alert("Added To cart")
      setitemAdded(!itemAdded)
   }
  
   return (
      <div className="Products-card" key={props.item.id}>
      <div  key={props.item.id}>
      <img className="Products-Image" src={props.item.image}></img>
       </div>      
      <h2 className="Products-title">{props.item.name}</h2>
      <p className="Products-body">Price:{props.item.price}</p>
      
      {itemAdded ?  <button className = "Products-CartBtn" type="button" onClick={cardBtnClicked}>Added</button> :  <button className = "Products-CartBtn" type="button" onClick={cardBtnClicked}>Add To Cart</button>  }
     
      
      </div>
   )
}

function Products() {
   const {productsData,setProductsData,sections,setSections} =  useContext(ProductContext)
  return (
     <div>
        {sections.map((sectionName) => (<><div>
         <h3>{sectionName}</h3>  
        </div>
        <div className="Products-container">
        {productsData[sectionName].map((item,index) => (<ProductItems item={item}></ProductItems>))}
        </div></>
        ))}
       
     </div>
  )
   
}

export default Products
{/* <div className="Products-container">
     
     </div> */}

  {/* {
       Object.entries(productsData)
       .map( ([key, value]) => value.map((item)=> 
       (product(item))) )
  } */}
     {/* {productsData.map((item) => (
       product(item)
     ))} */}



      {/* {Object.entries(productsData).map((sectionData,sectionName) => ( 
        <div>
        <h3>{sectionData[0]}</h3>  
        <div className="Products-container">
         {sectionData[1].map((post,index) => (product(post)))}
        </div> 
        </div>      
      ))} */}