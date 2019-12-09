import React, { useEffect } from 'react';
import './App.css';

import NavBar from './navbar/NavBar';
import orderService from './services/orderService';

function handleSuccess(res) {
  console.log('res', res);
}

function App() {
  useEffect(() => orderService.getItems(handleSuccess));

  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;

// 1 - Management is a big fan of Facebook and has heard of this thing called React so they want you to use it

// 2 - Management wants to be able to see in the same screen pending orders and items inventory

// 3- Management would like to have a top bar where the number of cancelled, pending, in progress and fulfilled orders is visible

// 4 - An order should not be created if not all the items are in stock

// Nice to Have Requirements(completely optional):

// 1 - Management has read some tech blogs and learned about TypeScript and would like it to be used

// 1 -Management likes filtering things, so he would like to be able to filter the items by color

// 2 - Management wants to be able to cancel an order that is in pending state within 3 minutes of the order being created.

// 3 - An order should be in pending state when first created and transitioned into in progress state after 3 minutes of being created
