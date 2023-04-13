import React, { useState, useEffect } from "react";
import { AiFillCloseSquare } from "react-icons/ai";

const Todo = ({ todos }) => {
  return (
    <div class="user-card">
      <table class="table">
        <tbody>
          {todos ? (
            todos.map((todo, index) => {
              return (
                <tr key={index}>
                  <td>{todo.id}</td>
                  <td>{todo.description}</td>
                  <td>
                    {/* <div onClick={() => deleteUser(todos)}> */}
                    <AiFillCloseSquare />
                    {/* </div> */}
                  </td>
                </tr>
              );
            })
          ) : (
            <div>You dont have any todos</div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
