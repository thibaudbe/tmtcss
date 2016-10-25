import React from 'react';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Grid from './Grid.jsx';


export default React.createClass({
  render() {
    return (
      <main>
        <Header/>
        <Grid/>
        <Footer/>
      </main>
    );
  }

});
