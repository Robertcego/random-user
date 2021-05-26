import React, { useState } from "react";
import "./App.css";
import Person from "./components/Person.jsx";

//? --------------- //

function App() {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  const [img, setImg] = useState([]);
  const [location, setLocation] = useState([]);

  //? ---------------- //

  const handleUser = () => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        data.results.map((persons) => {
          let person = {
            name: `${persons.name.first} ${persons.name.last}`,
            email: persons.email,
            phone: persons.phone,
            img: persons.picture.large,
            location: `${persons.location.city}, ${persons.location.country}`,
          };
          setName(person.name);
          setEmail(person.email);
          setPhone(person.phone);
          setImg(person.img);
          setLocation(person.location);
          return person;
        });
      });
  };

  //! ----------------------------- !//

  return (
    <div className="App">
      <header className="App-header">
        <Person
          name={name}
          email={email}
          phone={phone}
          img={img}
          location={location}
          onClick={handleUser}
        />
      </header>
    </div>
  );
}

export default App;
