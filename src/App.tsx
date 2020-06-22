import React from 'react';
import Cheat from './components/cheat/Cheat';
import { Answer } from './components/cheat/Answer';
import { MyQuestions } from  './components/MyQuestions';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/answers/:id">
              <Answer />
            </Route>
            <Route path="/myQuestions">
              <MyQuestions/>
            </Route>
            <Route path="/">
              <Cheat/>
            </Route>
          </Switch>
      </Router>


      {/* <div>
        <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
        <form>
          <input type="hidden" defaultValue={process.env.REACT_APP_NOT_SECRET_CODE} />
        </form>
      </div> */}
    </div>
  );
}

export default App;