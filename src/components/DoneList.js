import {useState} from "react"
import Home from "./Home";

function DoneList({doneList,onRecheck}){

    return(
        <div>
            <h2>완료한 일</h2>
            <ul className="list">
                {doneList.map((item, index) => 
            <li key={index} onClick={() => onRecheck(index)}>{item}</li>)}
            </ul>
            
        </div>
    )
}

export default DoneList;