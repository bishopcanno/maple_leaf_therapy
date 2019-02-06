import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Nav from './components/Nav';
import './App.css';
import MainCard from './components/MainCard';

export const UserContext = React.createContext();

export class App extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  }

  handleLogin = (data, cb) => {
    const {
      password,
      email,
      username
    } = data
    this.setState({
      password,
      email,
      username
    });
    console.log(cb);
    if(cb){
      cb()
      console.log(data)
    }
  };

  render() {
    return (
      <Router>
        <div>
          <UserContext.Provider value={
            {
              state: this.state,
              handleLogin: this.handleLogin
            }
          }>
            <header>
              <Nav />
            </header>

            <main className="container">
              <MainCard />
            </main>
          
            <footer className="page-footer red darken-3">
              <div className="container" />
              <div className="footer-copyright">
                <div className="container hide-on-med-and-down">
                  <span>COPYRIGHT 2019 © Eric Bishop</span>
                  <span className="right">
                    <Link className="footer-link" to="/about">
                      ABOUT
                    </Link>{" "}
                    |{" "}
                    <Link className="footer-link" to="/tech">
                      TECH
                    </Link>{" "}
                    |{" "}
                    <Link className="footer-link" to="/tandc">
                      TERMS AND CONDITIONS
                    </Link>
                  </span>
                </div>
              </div>
            </footer>
          </UserContext.Provider>
        </div>
      </Router>
    );
  }
}
