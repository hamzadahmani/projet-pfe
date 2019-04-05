import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./Store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./actions/user";
import Dashboard from "./components/Admin/Dashboard"
import Page404 from './components/Page404';
import Profil from './components/ProfilClient/Profil';
// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // // Check for expired token
  // const currentTime = Date.now() / 1000;
  // if (decoded.exp < currentTime) {
  //   // Logout user
  //   store.dispatch(logoutUser());
  //   // TODO: Clear current Profile

  //   // Redirect to login
  //   window.location.href = "/login";
  // }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/login" component={SignIn} />
            <Route  path="/user" component={Dashboard} />
            <Route  path="/Profil" component={Profil} />
            <Route  path="/repas" component={Dashboard} />
            <Route  path="/event" component={Dashboard} />
            <Route  path="/score" component={Dashboard} />
            <Route  path="/notif" component={Dashboard} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route component={Page404} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
