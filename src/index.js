import React from 'react';
import ReactDOM from 'react-dom/client';
import WrapComponent from './WrapComponent';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import section1Modal from './reducer/section1Modal';
import mainModal from './reducer/mainModal';
import topModal  from './reducer/topModal.js';
import signIn from './reducer/signIn.js';
import viewproduct from './reducer/viewproduct';
import viewProductIsFlag from './reducer/viewProductIsFlag';
import quickMenuViewProduct from './reducer/quickMenuViewProduct';
import sub4Modal from './reducer/sub4Modal.js';

let store = configureStore ({
  reducer : {
    section1Modal,
    mainModal,
    topModal,
    signIn,
    viewproduct,
    viewProductIsFlag,
    quickMenuViewProduct,
    sub4Modal
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <WrapComponent />
    </Provider>
  </React.StrictMode>
);