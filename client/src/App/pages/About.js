import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserCard from "./UserCard";
import Layout from "../components/Layout";
import SiteLogo from "../../public/logo.png";
const About = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const { cover } = UseSrc();

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
      <div>
        {cover}
        <div>
          {users.map((item) => {
            return <div>{item.email}</div>;
          })}
        </div>

        <h1> {renderUsers()}</h1>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <Link to={"./"}>
          <button variant="raised">Back to Home</button>
        </Link>
      </div>
    </Layout>
  );
};

export default About;
