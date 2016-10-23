import React from 'react';


export default React.createClass({

  render() {
    return (
      <div>
        <section>
          <div className="container">
            <legend>Extra small grid</legend>
            <div className="grid">
              <div className="col-lg-4"></div>{'\n'}
              <div className="col-lg-4 col-lg-offset-4"></div>{'\n'}
              <div className="col-lg-3"></div>{'\n'}
              <div className="col-lg-3 col-lg-offset-6"></div>{'\n'}
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <legend>Large grid - desktop</legend>
            <div className="grid">
              <div className="col-lg-12"></div>{'\n'}
              <div className="col-lg-11"></div>{'\n'}
              <div className="col-lg-1"></div>{'\n'}
              <div className="col-lg-10"></div>{'\n'}
              <div className="col-lg-2"></div>{'\n'}
              <div className="col-lg-9"></div>{'\n'}
              <div className="col-lg-3"></div>{'\n'}
              <div className="col-lg-8"></div>{'\n'}
              <div className="col-lg-4"></div>{'\n'}
              <div className="col-lg-7"></div>{'\n'}
              <div className="col-lg-5"></div>{'\n'}
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <legend>Medium grid - tablet</legend>
            <div className="grid">
              <div className="col-md-12"></div>{'\n'}
              <div className="col-md-11"></div>{'\n'}
              <div className="col-md-1"></div>{'\n'}
              <div className="col-md-10"></div>{'\n'}
              <div className="col-md-2"></div>{'\n'}
              <div className="col-md-9"></div>{'\n'}
              <div className="col-md-3"></div>{'\n'}
              <div className="col-md-8"></div>{'\n'}
              <div className="col-md-4"></div>{'\n'}
              <div className="col-md-7"></div>{'\n'}
              <div className="col-md-5"></div>{'\n'}
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <legend>Small grid - landscape mobile</legend>
            <div className="grid">
              <div className="col-sm-12"></div>{'\n'}
              <div className="col-sm-11"></div>{'\n'}
              <div className="col-sm-1"></div>{'\n'}
              <div className="col-sm-10"></div>{'\n'}
              <div className="col-sm-2"></div>{'\n'}
              <div className="col-sm-9"></div>{'\n'}
              <div className="col-sm-3"></div>{'\n'}
              <div className="col-sm-8"></div>{'\n'}
              <div className="col-sm-4"></div>{'\n'}
              <div className="col-sm-7"></div>{'\n'}
              <div className="col-sm-5"></div>{'\n'}
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <legend>Extra small grid - portrait mobile</legend>
            <div className="grid">
              <div className="col-xs-12"></div>{'\n'}
              <div className="col-xs-11"></div>{'\n'}
              <div className="col-xs-1"></div>{'\n'}
              <div className="col-xs-10"></div>{'\n'}
              <div className="col-xs-2"></div>{'\n'}
              <div className="col-xs-9"></div>{'\n'}
              <div className="col-xs-3"></div>{'\n'}
              <div className="col-xs-8"></div>{'\n'}
              <div className="col-xs-4"></div>{'\n'}
              <div className="col-xs-7"></div>{'\n'}
              <div className="col-xs-5"></div>{'\n'}
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <legend>Align middle</legend>
            <p><code>grid align-middle</code></p>
            <div className="grid align-middle">
              <div className="col-xs-4 big"></div>{'\n'}
              <div className="col-xs-4 small"></div>{'\n'}
              <div className="col-xs-4 medium"></div>{'\n'}
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <legend>Align bottom</legend>
            <p><code>grid align-bottom</code></p>
            <div className="grid align-bottom">
              <div className="col-xs-4 small"></div>{'\n'}
              <div className="col-xs-4 big"></div>{'\n'}
              <div className="col-xs-4 medium"></div>{'\n'}
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <legend>Align top</legend>
            <p><code>grid align-top</code></p>
            <div className="grid align-top">
              <div className="col-xs-4 medium"></div>{'\n'}
              <div className="col-xs-4 small"></div>{'\n'}
              <div className="col-xs-4 big"></div>{'\n'}
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <legend>Align top</legend>
            <p>Justify content if your items doesn't satisfied de 12 columns</p>
            <p><code>grid align-top</code></p>
            <div className="grid align-top">
              <div className="col-xs-4 big"></div>{'\n'}
              <div className="col-xs-2 small"></div>{'\n'}
              <div className="col-xs-4 medium"></div>{'\n'}
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <legend>Compose with breakpoints</legend>
            <div className="grid">
              <div className="col-lg-3 col-md-6 col-sm-3 col-xs-12"></div>{'\n'}
              <div className="col-lg-3 col-md-6 col-sm-3 col-xs-12"></div>{'\n'}
              <div className="col-lg-3 col-md-6 col-sm-3 col-xs-12"></div>{'\n'}
              <div className="col-lg-3 col-md-6 col-sm-3 col-xs-12"></div>{'\n'}
            </div>
            <div className="grid">
              <div className="col-xs-4"></div>{'\n'}
              <div className="col-xs-4"></div>{'\n'}
              <div className="col-xs-4"></div>{'\n'}
              <div className="col-xs-4"></div>{'\n'}
              <div className="col-xs-4"></div>{'\n'}
            </div>
          </div>
        </section>

      </div>
    );
  }

});
