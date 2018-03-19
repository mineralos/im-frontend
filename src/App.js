import React, { Component } from 'react';
import './Assets/css/styles.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Loginpage from './components/pages/loginPage';
import Wrapper from './components/wrapperComponent/wrapper';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      "authenticated": false
    };

  }


  componentWillMount() {
    window.customVars = {
        urlPrefix: "",
        apiDevsPools: "/api/summary",
        apiConfigPools: "/api/pools",
        apiMinerType: "/api/type",
        apiUpdatePools: "/api/updatePools",
        apiLogin: "/api/auth",
        apiUpdatePassword: "/api/updatePassword",
        apiNetwork: "/api/network",
        apiUpdateNetwork: "/api/updateNetwork",
        apiPing: "/api/ping",
        apiReboot: "/api/reboot",
        apiOverview: "/api/overview",
        apiUpgrade: "/upgrade/upload",
        apiUpgradeProgress: "/upgrade/ws",
        apiFactoryReset: "/api/factoryReset"
    };
  }


  componentDidMount() {

  }

  render() {


    return (
      <div className="App">
          <Router>
            <Wrapper/>
          </Router>
      </div>
    );

  }
}

export default App;
