import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import { MainForm } from './components/MainForm/MainForm';
import { UsersListPage  } from './components/UsersLIstPage/UsersLIstPage';


const App = () => {
  return (
    <div className = "wrapper">
      <Routes>
        <Route path="/" element = {<MainForm/>} />
        <Route path="/users" element = {<UsersListPage/>} />
      </Routes>
    </div>
  );
}

export default App;
