import React from 'react';
import './App.css';

import Home from './Home';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';

import {
  Route,
  Link
} from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: {
        'Jon Snow': '404-111-1123',
        'Daenerys Targaryen': '404-332-3951',
        'Arya Stark': '770-331-1123',
        'Tyrion Lannister': '678-331-2315',
        'Cersei Lannister': '404-333-1111',
        'Sansa Stark': '770-854-6772',
        'Bran Stark': '770-443-1578',
        'Jaime Lannister': '678-651-4445',
        'Eddard Stark': '678-000-0091',
        'Brienne of Tarth': '770-990-3331',
        'Sandor Clegane': '404-231-6621',
        'Joffrey Baratheon': '770-560-9375',
        'Petyr Baelish': '404-311-0009',
        'Tywin Lannister': '404-018-3717'
      }
    }
  }

  render() {
    return (
      <div className="App">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link to='/' className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to='/contacts' className="nav-link">Contacts</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route path="/contacts" render={(props) => (
          <ContactList {...props} contacts={Object.keys(this.state.contacts)} />
          )} />
          <Route path='/contacts/:name' render={(props) => {
            const id = props.match.params.name;
            return <ContactDetail {...props} id={id} detail={this.state.contacts[id]}/>
          }} />
      </div>
    );

  }
}

export default App;
