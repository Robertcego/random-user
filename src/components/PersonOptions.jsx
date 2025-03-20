import React, { useState } from 'react';
import axios from 'axios';

import PersonImage from './PersonImage';
import Person from './Person';

import containerCSS from './PersonInformation.module.css';

function PersonOptions() {
    const [img, setImg] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [genderSelection, setGenderSelection] = useState('');
    const [gender, setGender] = useState('');
    const [occupation, setOccupation] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState({ street: '', city: '', state: '', country: '' });
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [creditCard, setCreditCard] = useState('');

    const handleGenderSelection = (e) => {
        setGenderSelection(e.target.value);
    };

    const getUserData = async () => {
        if (!genderSelection) {
            console.warn("No gender selected");
            return;
        }

        try {
            // Fetch only gender-specific user data
            const response = await axios.get(`https://randomuser.me/api/?gender=${genderSelection}`);
            const userData = response.data.results[0];

            setImg(userData.picture.large);
            setName(userData.name.first);
            setLastname(userData.name.last);
            setUsername(userData.login.username);
            setDateOfBirth(userData.dob.date);
            setGender(userData.gender);
            setOccupation(userData.job || "N/A");  // `randomuser.me` doesn't return occupation
            setPhone(userData.phone);

            // Fix: Address handling
            setAddress({
                street: userData.location.street.name,
                city: userData.location.city,
                state: userData.location.state,
                country: userData.location.country,
            });

            setEmail(userData.email);
            setPassword(userData.login.password);
            setCreditCard(userData.credit_card?.cc_number || "N/A"); // This API does not provide CC data

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div className={containerCSS.child_container}>
            <div>
                <label>Specify gender</label>
                <select onChange={handleGenderSelection} value={genderSelection}>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <button type="button" onClick={getUserData}>Select gender</button>
            </div>
            <PersonImage img={img} />
            <div>
                <Person
                    name={name}
                    lastname={lastname}
                    username={username}
                    date_of_birth={dateOfBirth}
                    gender={gender}
                    occupation={occupation}
                    phone={phone}
                    address={address}  // Pass full address
                    email={email}
                    password={password}
                    credit_card={creditCard}
                />
            </div>
        </div>
    );
}

export default PersonOptions;
