import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/configureStore';
// import './styles/app.scss';

class App extends React.Component {
  render() {
    return <div className="text">This is my application!!!!!!</div>;
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
