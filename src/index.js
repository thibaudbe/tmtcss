import React from 'react';
import Index from './js/Index.jsx';


const reactApp = document.querySelector('#reactApp');


document.addEventListener('DOMContentLoaded', () => {
  React.render(
    <Index />,
    reactApp
  );
});
