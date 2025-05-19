import { useState } from 'react'
import './App.css'

const PASSWORD = import.meta.env.VITE_PASSWORD;

export default function App() {
  const [entered, setEntered] = useState("");
  const [authenicated, setAuthenticated] = useState(false);
  
  function checkPassword(e) {
    e.preventDefault();
    if (entered == PASSWORD) {
      setAuthenticated(true);
    }
    else {
    alert("Wrong password, try again!");
    setEntered("");
  }
}


if (!authenicated) {
  return(
    <div style={{ textAlign: "center", marginTop:"5rem" }}>
      <h2>Enter Password to Access Scrapbook</h2>
      <form onSubmit={checkPassword}>
        <input 
        type="password"
        value={entered}
        onChange={(e) => setEntered(e.target.value)}
        placeholder="Password"
        style={{ fontSize: "1.2rem", padding: "0.5rem" }}
        />

      <button type="submit" style={{ marginLeft: "1rem", padding: "0.5rem 1rem" }}>
        Unlock
      </button>
      </form>
    </div>
  );
}


return (

  <div style={{ padding: "2rem" }}>
    <h1> Welcome to our Scrapbook!</h1>
    <p>Start adding your memories here...</p>
  </div>
);
}
