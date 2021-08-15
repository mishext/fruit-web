import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./Components/Login/LoginPage";
import Dashboard from "./Pages/Dashboard";
import SignUp from "./Components/SignUp/SignUp";
import { AuthProvider } from "./Components/Auth";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/Dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/SignUp">
              <SignUp />
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
