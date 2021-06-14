import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Search from "./components/Search";

function App() {
  return (
    <Router>
      <div className="relative">
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/search-results/:value">
            <Search />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
