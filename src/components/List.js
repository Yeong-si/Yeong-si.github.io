import {useState} from "react";
import Home from "./Home";
import './List.css';

function List({list, onCheck}){
    


    return (
        <div>
            <h2>해야할 일</h2>
            <ul className="list">
                {list.map((item, index) => 
            <li key={index} onClick={() => onCheck(index)}>{item}</li>)}
            </ul>
        </div>
    );
}

export default List;