import React, { useEffect, useState } from 'react';
import './App.css';
import Person from './components/Person.jsx';

//? ..... ?//
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

//? --------------- //

function App() {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  const [img, setImg] = useState([]);
  const [location, setLocation] = useState([]);

  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    img: '',
    location: '',
  });

  //? ---------------- //
  useEffect(() => {
    document.title = `${name}`;
  }, [name]);

  const handleUser = () => {
    fetch('https://randomuser.me/api/?results=10')
      .then((response) => response.json())
      .then((data) => {
        data.results.map((persons) => {
          let person = {
            name: `${persons.name.first} ${persons.name.last}, ${persons.dob.age}`,
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
    <div className='App'>
      <header className='App-header'>
        <Person
          name={name}
          email={email}
          phone={phone}
          img={img}
          location={location}
        />
        <br />
        <Button size='lg' variant='info' onClick={handleUser}>
          Get Random User
        </Button>
      </header>
    </div>
  );
}

export default App;
