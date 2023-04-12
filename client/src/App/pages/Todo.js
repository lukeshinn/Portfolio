import React, { useState, useEffect } from "react";
import { AiFillCloseSquare } from "react-icons/ai";

const Todo = ({ todos, deleteUser }) => {
  return (
    <div class="user-card">
      {/* <h1>The user card! {user.name}</h1> */}
      {/* TODO: */}
      {/* why cant I call this onclick without an arrow function */}
      {/* <div onClick={() => deleteUser()}>
        <AiFillCloseSquare />
      </div> */}

      <table class="table">
        <tbody>
          {todos.map((todo, index) => {
            return (
              <tr key={index}>
                <td>{todo.id}</td>
                <td>{todo.name}</td>
                <td>{todo.email}</td>
                <td>
                  <div onClick={() => deleteUser(todos)}>
                    <AiFillCloseSquare />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
