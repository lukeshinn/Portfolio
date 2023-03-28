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

  const renderUsers = () => {
    return users.map((t) => <UserCard user={t} key={t.id} />);
  };
  return (
    <Layout>
      <div class="section">
        <h1> {renderUsers()}</h1>
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
