import React, { useState, useEffect } from "react";
import { AiFillCloseSquare } from "react-icons/ai";

const UserCard = ({ users, deleteUser }) => {
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
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <div onClick={() => deleteUser(user)}>
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

export default UserCard;
