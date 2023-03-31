import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import UserCard from "./UserCard";

const API = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("/api/user", {
        method: "POST",
        headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setEmail("");
        setPassword("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
    getUsers();
  };

  const getUsers = () => {
    fetch("/api/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data.data);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  let deleteUser = async (user) => {
    console.log("deleting user");
    try {
      let res = await fetch("/api/user/", {
        method: "DELETE",
        headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify({
          id: user.id,
        }),
      });
    } catch (err) {
      console.log(err);
    }
    getUsers();
  };

  return (
    <Layout>
      <div class="section">
        <UserCard users={users} deleteUser={deleteUser} />
      </div>
      <div class="section">
        <form onSubmit={handleSubmit} class="form">
          <div class="field">
            <label class="label">Name</label>
            <input
              type="text"
              class="input"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="field">
            <label class="label">Email</label>
            <input
              type="text"
              class="input"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="field">
            <label class="label">Password</label>
            <input
              type="text"
              class="input"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" class="button is-primary">
            Create
          </button>

          <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
      </div>
    </Layout>
  );
};

export default API;

// {
//   users.map((item) => {
//     return <div>{item.email}</div>;
//   });
// }

// https://www.techomoro.com/submit-a-form-data-to-rest-api-in-a-react-app/
