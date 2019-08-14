import React, { useState } from 'react';

import styled from 'styled-components';

import './App.css';

import Form from './components/Form.js';
import Members from './components/Members.js';



function App() {

  // default value of '' is given because i dont want the list in the Members.js to return until there is actual
  // data inside of teamMembers
  const [teamMembers, setTeamMembers] = useState([]);

  // this hook will be used to edit the individual information of each member
  const [memberToEdit, setMemberToEdit] = useState({})

  // this function will be passed down to the form component because the form is where we want to actually
  // create the new member. Here we can see that we are setting the state of teamMembers and
  // a new member is being added to the teamMembers array. Since the default 
  const addNewMember = member => {
    setTeamMembers([...teamMembers, member]);
    
  };

  // editMember is a function that will allow the user to edit the member info. It needs to be passed down into
  // Member.js as a prop so that it can be updated according to the current member that has the 'edit' button clicked
  const editMember = member => {
    setMemberToEdit(member);
  };

  

  return (
    <div className="App">
      <h1>Please Enter in a Team Member</h1>
      <Form addNewMember={addNewMember} memberToEdit={memberToEdit} />
      <Members memberList={teamMembers} editFunction={editMember} />
    </div>
  );
}

export default App;
