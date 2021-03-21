import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from 'react-router-dom'
import App from "./components/App";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";

import './index.scss';

// const store = configureStore();

ReactDOM.render(
  <ReduxProvider store={store}>
   <Router>
     <App />
   </Router>
  </ReduxProvider>,
  document.getElementById("root")
);
