import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';
import { ProductContext } from './Contexts/productContext';
import { useState,useEffect } from 'react';



function App() {
  const [productsData, setProductsData] = useState({});
  const  [sections,setSections] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9999/sample1.json')
       .then((response) => response.json())
       .then((data) => {
          console.log("Data value===="+data)
          setSections(Object.keys(data))
          console.log('Sections names ==== '+sections)
          sections.map((sectionName)=>{
            let dictValue = productsData[sectionName]
            console.log("Sectionname is" + sectionName + "section values are" + dictValue)
          })

         
         setProductsData(data)

        
       })
       .catch((err) => {
          console.log(err.message);
       });
 });

  return (
    <Router>
    <div className="App">
        <ProductContext.Provider value={{productsData,setProductsData,sections,setSections}} >
        <NavBar></NavBar>        
        <Routes>  
                 <Route exact path='/' element={< Home />}></Route>  
                 <Route exact path='/about' element={< About />}></Route>  
                 <Route exact path='/contact' element={< Contact />}></Route>  
          </Routes>  
        {/* <img src={foodImage} />
        <Products></Products> */}
        </ProductContext.Provider>
    </div>
    </Router>
  );
}

export default App;
