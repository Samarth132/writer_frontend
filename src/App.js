import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ChapterContent from './components/ChapterContent';
import Chapters from './components/Chapters';
import Create from './components/Create';
import Features from './components/Features';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navigation';
import Signup from './components/Signup';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
              <Features/>
              <Signup/>
            </Route>
            <Route exact path="/login">
              <Login/>
            </Route>
            <Route exact path="/create">
              <Create/>
            </Route>
            <Route exact path="/chapters">
              <Chapters/>
            </Route>
            <Route exact path="/chapters/:id">
              <ChapterContent/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
