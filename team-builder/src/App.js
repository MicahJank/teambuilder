import React, { useState } from 'react';

import styled from 'styled-components';

import './App.css';

const NoMembers = styled.h1`
  text-align: center;
`;

function App() {

  const [teamMembers, setTeamMemebers] = useState();


  // I am putting in this conditional here because i know i will need to programatically create each new team member
  // in a seperate component. That component will need to take the array that will be assigned to teamMembers and
  // map over it. So if i dont have this conditional then that .map wont work at the start because the array will
  // return truthy and will cause an error on the .map function since there will be no items in it at the start.
  //In other words, i need this so that i can avoid running the .map until my form has submitted actual data to the
  // state
  if (!teamMembers) {
    return (
      <NoMembers>You have no Team Members yet!</NoMembers>
    );
  }

  return (
    <div className="App">
      <h1>Please Enter in a Team Member</h1>
    </div>
  );
}

export default App;
