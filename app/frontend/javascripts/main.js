import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store/configureStore';
import Container from './components/Container';
// import './styles/app.scss';

class App extends React.Component {
  render() {
    return <div><Container /></div>;
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
