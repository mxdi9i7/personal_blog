import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/Normalize.css'
import './styles/Global.css'
import './styles/Grid.css'
import Landing from './pages/Landing'

class App extends Component {
  render() {
    return (
			<Router>
				<div>
					<Route exact path="/" component={Landing} />
				</div>
			</Router>
			
    );
  }
}

export default App;
