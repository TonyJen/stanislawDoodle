import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import EngineActor from './components/EngineActor';
import EngineAction from './components/EngineAction';
import EngineTransition from './components/EngineTransition';
import Score from './components/Score';
import Level from './components/Level';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Define the game state here
    };
  }

  gameLoop = () => {
    // Implement the game loop logic here
  }

  handleAction = (action) => {
    // Implement the action handling logic here
  }

  handleTransition = (transition) => {
    // Implement the transition handling logic here
  }

  render() {
    // Implement the rendering of the game scenes here
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/level" component={Level} />
            <Route path="/" component={Score} />
          </Switch>
          <EngineActor />
          <EngineAction />
          <EngineTransition />
        </Router>
      </Provider>
    );
  }
}

export default App;
    return (
      <div>
        <EngineActor />
        <EngineAction />
        <EngineTransition />
      </div>
    );
  }
}

export default App;
