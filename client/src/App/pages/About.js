import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserCard from "./UserCard";
import Layout from "../components/Layout";
import ImageLoader from "../components/ImageLoader";
import Headshot from "../../public/lukeshinn.jpg";

const About = () => {
  const [users, setUsers] = useState([]);

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
        <div class="columns">
          <div class="column">
            <h1 class="title">I'm Luke Shinn</h1>
            <h3 class="subtitle">Software Engineer</h3>
            <p>Technically sound, creative problem solving culture giant</p>
          </div>
          <div class="column">
            <div class="featured-image">
              <ImageLoader src={Headshot} />
            </div>
          </div>
          {/* {users.map((item) => {
          return <div>{item.email}</div>;
        })} */}
          {/* <h1> {renderUsers()}</h1> */}
          {/* <p>You clicked {count} times</p> */}
        </div>
      </div>
    </Layout>
  );
};

export default About;
