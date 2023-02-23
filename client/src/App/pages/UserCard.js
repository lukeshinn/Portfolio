import React from "react";

const UserCard = (props) => {
  const { user } = props;
  return (
    <div class="user-card">
      <h1>The user card! {user.name}</h1>
    </div>
  );
};

export default UserCard;
