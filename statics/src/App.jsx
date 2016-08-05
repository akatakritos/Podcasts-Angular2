import React, { Component } from 'react';

class App extends Component {
  render() {
    return <div>
         <div className="navbar navbar-inverse navbar-static-top">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a href="/" className="navbar-brand">Podcasts</a>
                </div>
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="container body-content">
            <div>
                {this.props.children}
            </div>
            <hr />
            <footer>
                <p>&copy; 2016 - My ASP.NET Application</p>
            </footer>
        </div>
    </div>
  }
}

export default App;
