import React from 'react';

import PersonImage from './PersonImage';

import personDataCSS from './Person.module.css';

//! .... !//

function Person({ avatar, name, lastname, username, date_of_birth, personGender, gender, occupation, phone, address, state, country, email, password, credit_card }) {
  return (
    <div>
      <PersonImage img={avatar} />
      <p><span className={personDataCSS.userData}>Name:</span> {name}</p>
      <p><span className={personDataCSS.userData}>Last name:</span> {lastname}</p>
      <p><span className={personDataCSS.userData}>Username:</span> {username}</p>
      <p><span className={personDataCSS.userData}>Date of Birth:</span> {date_of_birth}</p>
      <p><span className={personDataCSS.userData}>Gender:</span> {gender}</p>
      <p><span className={personDataCSS.userData}>Gender:</span> {personGender}</p>
      <p><span className={personDataCSS.userData}>Ocupation:</span> {occupation}</p>
      <p><span className={personDataCSS.userData}>Phone:</span> {phone}</p>
      <p><span className={personDataCSS.userData}>City:</span> {address}</p>
      <p><span className={personDataCSS.userData}>State:</span> {state}</p>
      <p><span className={personDataCSS.userData}>Country:</span> {country}</p>
      <p><span className={personDataCSS.userData}>Email:</span> {email}</p>
      <p><span className={personDataCSS.userData}>Password:</span> {password}</p>
      <p><span className={personDataCSS.userData}>CC:</span> {credit_card}</p>
    </div>
  );
}

export default Person;
