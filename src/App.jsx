import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/login/LoginPage";
import NewsPage from "./components/news/NewsPage";
import ProfilePage from "./components/profile/ProfilePage";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/news">
            <NewsPage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route>
            No such page!
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
