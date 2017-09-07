import React from 'react';
import {render} from 'react-dom';
import {test} from './test/test.jsx';

class App extends React.Component {
  render () {
    return <test></test>;
  }
}

render(<App/>, document.getElementById('app'));