import React from 'react';
import { Link } from 'react-router-dom';

function ContactList({match, contacts}) {
    const contactLink = contacts.map((name, i) => (
        <li key={i}>
            <Link to={`${match.path}/${name}`}>{name}</Link>
        </li>
    ));
    return (
        <div>
            <h3>Names</h3>
            <ul>
                {contactLink}
            </ul>
        </div>
    )
}


export default ContactList;