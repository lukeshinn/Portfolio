import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useQuery, gql } from "@apollo/client";

const FILMS_QUERY = gql`
  {
    launchesPast(limit: 10) {
      id
      mission_name
    }
  }
`;

const GraphQL = () => {
  const { data, loading, error } = useQuery(FILMS_QUERY);
  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;
  console.log(data);

  return (
    <Layout>
      <div class="section">
        <ul>
          {data.launchesPast.map((launch) => (
            <li key={launch.id}>{launch.mission_name}</li>
          ))}
        </ul>
        <h3 class="subtitle">Software Engineer</h3>
        <p>Technically sound, creative problem solving culture giant</p>
      </div>
    </Layout>
  );
};

export default GraphQL;
