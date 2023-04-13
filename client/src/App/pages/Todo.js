import React, { useState, useEffect } from "react";
import { AiFillCloseSquare } from "react-icons/ai";

let handleSubmit = async (e) => {
  e.preventDefault();
};

const Todo = ({ todos }) => {
  return (
    <div class="user-card">
      <div class="section">
        <form onSubmit={handleSubmit} class="form">
          <div class="field">
            <label class="label">Name</label>
            <input
              type="text"
              class="input"
              // value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button type="submit" class="button is-primary">
            Create
          </button>

          {/* <div className="message">{message ? <p>{message}</p> : null}</div> */}
        </form>
      </div>
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
