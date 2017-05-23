import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component, this component should produce some HTML
const App = () => {
  return <div>Wilson</div>;
}

// Take this component's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));
