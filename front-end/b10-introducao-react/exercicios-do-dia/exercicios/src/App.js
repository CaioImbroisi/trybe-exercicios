import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header'
import Content from './Content'
import Footer from './Footer';





const compromissos = () =>{
const lista = ['dormir','estudar','comer','estudar de novo', 'comer', 'jogar'];
return lista.map((listaMap) => <li>{listaMap}</li>)
} 

function App() {
  return (<>
  <Header />
  <Content /> 
   <Footer />
   </>
  )
  ;
}

export default App;
//