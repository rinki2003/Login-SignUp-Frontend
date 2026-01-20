import React from "react";

function Dashboard() {
  // Get the username from localStorage
  const name = localStorage.getItem("name");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome, {name}!</h1>
      <p>You have successfully logged in.</p>
    </div>
  );
}

export default Dashboard;
