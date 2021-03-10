import "./App.css";
import AuthenticationButton from "./components/authentication-button";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import ProtectedRoute from "./auth/protected-route";
import Profile from "./views/profile";
import Loading from "./components/loading";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <AuthenticationButton />
      <Switch>
        <Route path="/" exact component={Home} />
        <ProtectedRoute path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
