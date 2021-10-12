import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogData = [
  {id: 1, name: 'Vasya'},
  {id: 2, name: 'Kolya'},
  {id: 3, name: 'Petya'},
  {id: 4, name: 'Sergey'},
  {id: 5, name: 'Ivan'},
];

const messagesData = [
  {id: 1, message: 'Привет как дела?', name: 'Vasya'},
  {id: 2, message: 'Нормально', name: 'Me'},
  {id: 3, message: 'Нормально', name: 'Me'},
];

const postData = [
  {id: 1, text: 'first comment', likeCount: 2},
  {id: 2, text: 'second comment', likeCount: 12},
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogData={dialogData} messagesData={messagesData} postData={postData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
