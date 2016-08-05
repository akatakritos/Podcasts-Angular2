import React, { Component } from 'react';
import { Link } from 'react-router';

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
                    <Link to="/" className="navbar-brand">Podcasts</Link>
                </div>
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
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
