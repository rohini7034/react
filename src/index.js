import React from 'react';
import ReactDOM from 'react-dom/client';
import ListItem from'./list/ListItem';
import Header from './list/Component/Header';
import Footer from './list/Component/Footer';
import List from './list/List';




const root = ReactDOM.createRoot(document.getElementById('root'));
// const arr = ["lable0","lable1","lable2","lable3"]


  
root.render(
<div className='app'>
  <Header />
  
  <div className='app-body'>
    <List />
  </div>
 
  <Footer />
</div>
);



