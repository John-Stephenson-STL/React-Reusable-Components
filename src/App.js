import React from 'react';
import './App.css';

// const helloWorld = <div>A Generic HelloWorld Text!</div>;
// const message = props => <div>{props.msg}</div>;
const Message = props => <div>{props.msg}</div>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* {helloWorld} */}
        {/* Part 2 */}
        {/* {message({msg: 'A Generic Hello World Text'})}
        {message({msg: 'Creating Reusable React Components'})} */}
        {/* PART 3
        {React.createElement(message, {msg: 'A Generic Hello World Text'})}
        {React.createElement(message, {
          msg: 'Creating Reusable React Components',
        })} */}
        <Message msg="A Generic Hello World Text" />
        <Message msg="Creating Reusable React Components" />
      </header>
    </div>
  );
}

export default App;