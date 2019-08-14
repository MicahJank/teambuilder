import React, { useState } from 'react';

import styled from 'styled-components';

import './App.css';

import Form from './components/Form.js';
import Members from './components/Members.js';



function App() {

  // default value of false is given because i dont want the list in the Members.js to return until there is actual
  // data inside of teamMembers
  const [teamMembers, setTeamMemebers] = useState(false);

  return (
    <div className="App">
      <h1>Please Enter in a Team Member</h1>
      <Form />
      <Members teamMembers={teamMembers} />
    </div>
  );
}

export default App;
