import { useState } from "react";

export default function From() {
  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password:"",
  });

  /*let handleNameChange = (event) => {
    setFullName(event.target.value);
  };
   let handleUsername= (event) => {
    setUsername(event.target.value);
  };*/

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]:  event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      fullName: "",
      username: "",
      password:"",
    });
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="fullName"></label>
      <input
        type="text"
        value={formData.fullName}
        placeholder="enter your full name"
        onChange={handleInputChange}
        id="fullName"
        name="fullName"
      />
      <br />
      <br />
      <input
        type="text"
        value={formData.username}
        placeholder="enter your user name"
        onChange={handleInputChange}
        id="username"
        name="username"
      />
      <br />
      <input
        type="password"
        value={formData.password}
        placeholder="enter your password"
        onChange={handleInputChange}
        id="password"
        name="password"
      />
      <br />
      <button>Submit</button>
    </form>
  );
}
