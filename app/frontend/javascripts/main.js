import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ActionCableProvider} from 'react-actioncable-provider'
import {store} from './store/configureStore';
import Container from './components/Container';
import { wsUrl } from './api/axiosConfig';
import '../styles/app.scss';

class App extends React.Component {
  render() {
    return (
      <ActionCableProvider url={wsUrl}>
        <Container />
      </ActionCableProvider>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
