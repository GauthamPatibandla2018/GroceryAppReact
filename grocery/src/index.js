import React from 'react';
import ReactDOM from 'react-dom';   
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './components/About';
import Contact from './components/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const routing = (  
//   <Router>  
//     <div>  
//       <h1>React Router Example</h1>  
//       <Route exact path="/" component={Home} />  
//       <Route path="/about" component={About} />  
//       <Route path="/contact" component={Contact} />  
//     </div>  
//   </Router>  
// )  
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
