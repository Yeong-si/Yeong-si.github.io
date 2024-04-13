import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import List from "./components/List";
import DoneList from './components/DoneList';
import Home from './components/Home';
import {useState} from "react";

function App() {

  const [list, setList] = useState([]);
  const [doneList , setDoneList] = useState([]);

  const addTodo = (todo) => {
    setList([todo, ...list]);
  };

  const onCheck = (index) => {
    const itemToMove = list[index];
    const newList = list.filter((_, itemIndex) => index !== itemIndex);
    setList(newList);
    setDoneList([itemToMove, ...doneList]);
  };
  
  
  
  const onRecheck = (index) => {
    const itemToMove = doneList[index];
    const newList = doneList.filter((_, itemIndex) => index !== itemIndex);
    setDoneList(newList);
    setList([itemToMove, ...list]);
    
  };
    

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={
          <List/>
        } />
      </Routes>
    </Router>
  );
}

export default App;
