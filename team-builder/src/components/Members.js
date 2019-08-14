import React, { useState } from 'react';

import styled from 'styled-components';



const NoMembers = styled.h3`
  text-align: center;
`;

const MemberCard = styled.div`
  background-color: white;
  box-shadow: 0px 8px 21px -4px rgba(125,125,125,1);
  width: 350px;
  margin: 50px auto;
  padding: 30px;

  button {
    padding: 3px 10px;
    background-color: #5CBCF6;
    border: none;
    border-radius: 2px;
    color: white;
    cursor: pointer;
  }
`;

const Members = ({ memberList, editFunction }) => {
   
    // memberList is the array of team members. Since it starts off as an empty array i need to check that there has been data passed through it before i start trying to display that
    // data. So here i am checking if the memberList array contains any values, if it doesnt then that means a form hasnt been submitted yet so it shouldnt return any information. If
    // there is data in the array, then it will skip this and will return the data down below to be rendered.
    if (!memberList[0]) {
        return (
          <NoMembers>You have no Team Members yet!</NoMembers>
        );
      }


      // this wont return until memberList[0] returns true
    return (
      memberList.map((member, i) => {
        return (
          <MemberCard key={i}>
            <h2>{member.name}</h2>
            <h3>{member.email}</h3>
            <h3>{member.role}</h3>
            <button onClick={() => { editFunction(member) }}>Edit</button>
          </MemberCard>
        );
      })
    );

};

export default Members;
