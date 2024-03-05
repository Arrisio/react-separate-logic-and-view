import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'antd/dist/antd.css';
import 'antd/dist/antd.min.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
// import Tasks from './components/tasks/tasks'
import 'antd/'
// import TasksReactSortableHoc from "./components/tasks/tasks-react-sortable-hoc";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // <Tasks/>
// <  TasksReactSortableHoc/>
   // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
