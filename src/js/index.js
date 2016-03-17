import React from 'react';
import Index from './components/Index.jsx';


const reactApp = document.querySelector('#reactApp');


document.addEventListener('DOMContentLoaded', () => {
  React.render(
    <Index />, 
    reactApp
  );
});