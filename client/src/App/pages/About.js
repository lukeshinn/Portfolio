import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserCard from "./UserCard";
import Layout from "../components/Layout";
import ImageLoader from "../components/ImageLoader";
import Headshot from "../../public/lukeshinn.jpg";

const About = () => {
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
        </div>
      </div>
    </Layout>
  );
};

export default About;
