import React from 'react';
import Cheat from './components/cheat/Cheat';

function App() {
  return (
    <div className="App">
      <Cheat/>

      <div>
        <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
        <form>
          <input type="hidden" defaultValue={process.env.REACT_APP_NOT_SECRET_CODE} />
        </form>
      </div>
    </div>
  );
}

export default App;