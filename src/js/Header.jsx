import React from 'react';


export default React.createClass({

  render() {
    const cssFile = '../../dist/css/tmtcss.css'
    const cssMinFile = '../../dist/css/tmtcss.min.css'
    const srcFile = '../../src/index.styl'

    return (
      <header>
        <div className="container">
          <h1>TMTCSS</h1>
          <p>Toi même tu CSS !</p>

          <div className="links">
            <button
              type="submit"
              className="btn"
              onClick={ _ => window.open(cssFile) }>
              .css
            </button>
            <button
              type="submit"
              className="btn"
              onClick={ _ => window.open(cssMinFile) }>
              .min.css
            </button>
            <button
              type="submit"
              className="btn"
              onClick={ _ => window.open(srcFile) }>
              .styl
            </button>
          </div>
        </div>
      </header>
    );
  }

});
