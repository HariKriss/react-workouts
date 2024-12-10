import React, { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([
    {
      name: "Hari",
      email: "hari@gmail.com",
    },
    {
      name: "Vengat",
      email: "vengat@gmail.com",
    },
  ]);

  const [adduser, setAdduser] = useState({ name: "", email: "" });

  const handleChnage = (e) => {
    // const {name, value} = e.target; 

    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value)
    setAdduser({
      ...adduser,
      [name] : value,
    })
    
  };

  const addNewUser = () => {

    if(adduser.name.trim() === "" || adduser.email.trim()=== ""){
      return 
    }

    const newUser = {
      name : adduser.name,
      email : adduser.email
    }

    setUsers((item,ind) => (
      [...item, newUser]
    ))

    setAdduser({ name: "", email: "" })

  }

  return (
    <div>
      <div>
        <label>Name : </label>
        <input
          type="text"
          name="name"
          placeholder="enter name"
          value={adduser.name}
          onChange={handleChnage}
        />
        <br />
        <label>Email : </label>
        <input
          type="email"
          name="email"
          placeholder="enter email"
          value={adduser.email}
          onChange={handleChnage}
        />
        <br/>
        <button onClick={addNewUser}>Add</button>
      </div>

      {users.length > 0 ? (
        users.map((item, index) => (
          <div key={index}>
            <ol>
              <li>{item.name}</li>
              <li>{item.email}</li>
            </ol>
          </div>
        ))
      ) : (
        <p>no users found</p>
      )}
    </div>
  );
}

export default App;
