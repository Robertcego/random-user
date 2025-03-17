import { useState, useEffect } from 'react'
import axios from 'axios';


// import Container from './Container';
import PersonImage from './PersonImage';
import Person from './Person';

import containerCSS from './PersonInformation.module.css';


function PersonInformation() {
    const [img, setImg] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [date_of_birth, setDate_of_birth] = useState('');
    const [gender, setGender] = useState('');
    const [occupation, setOccupation] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState({
        street: '',
        city: '',
        state: '',
        country: '',
    });
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [credit_card, setCredit_card] = useState('');


    useEffect(() => {
        axios.get('https://random-data-api.com/api/v2/users')
            .then((response) => {
                console.log('====================================');
                console.log(response.data);
                console.log('====================================');
                setImg('https://avatar.iran.liara.run/public');
                setName(response.data.first_name);
                setLastname(response.data.last_name);
                setUsername(response.data.username);
                setDate_of_birth(response.data.date_of_birth);
                setGender(response.data.gender);
                setOccupation(response.data.occupation);
                setPhone(response.data.phone_number);
                setAddress({
                    street: response.data.address.street_name,
                    city: response.data.address.city,
                    state: response.data.address.state,
                    country: response.data.address.country,
                });
                setEmail(response.data.email);
                setPassword(response.data.password);
                setCredit_card(response.data.credit_card.cc_number);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);



    return (
        <div className={containerCSS.child_container}>
            <div>
                <PersonImage img={img} />
            </div>
            <div>
                <Person
                    name={name}
                    lastname={lastname}
                    username={username}
                    date_of_birth={date_of_birth}
                    gender={gender}
                    occupation={occupation}
                    phone={phone}
                    address={address
                        .city}
                    state={address
                        .state}
                    country={address
                        .country}
                    email={email}
                    password={password}
                    credit_card={credit_card}
                />
            </div>
        </div>
    )

}

export default PersonInformation;