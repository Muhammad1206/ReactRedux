import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/NavBar/NavBar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login"
import Registor from "./components/Registor/Registor";
import Video from "./components/Video/Video.jsx";

const App = (props) => {
  return (
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Route path="/dialogs"
            render={() => <DialogsContainer />}
          />
          <Route path="/profile"
            render={() => (<ProfileContainer/>)}
          />
          <Route path="/users"
            render={() => (<UsersContainer/>)}
          />
          <Route path="/music" component={Music} />
          <Route path="/news" component={News} />
          <Route path="/settings" component={Settings} />
          <Route path="/login" component={Login} />
          <Route path="/registor" component={Registor} />
          <Route path="/video" component={Video} />
        </div>
      </div>
    
  );
};
export default App;
