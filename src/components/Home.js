import { useState } from "react";
import './Home.css'

function Home({ addTodo }) {
  const [todo, setTodo] = useState("");

  const onChange = (event) => {
    setTodo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    addTodo(todo);
    setTodo("");
  };

  return (
    <div className="app">
      <h1>오늘 뭐해?🤷🏻</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={todo} />
        <button>+</button>
      </form>
    </div>
  );
}

export default Home;