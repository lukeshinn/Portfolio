import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    fetch("/api/todos")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTodos(data.data);
      });
  };

  useEffect(() => {
    getTodos();
    console.log(todos);
  }, []);

  return (
    <Layout>
      <div class="section">
        <h3 class="subtitle">Software Engineer</h3>
        <Todo todos={todos} />
      </div>
    </Layout>
  );
};

export default TodoList;
