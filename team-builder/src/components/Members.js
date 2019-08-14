import React, { useState } from 'react';

import styled from 'styled-components';



const NoMembers = styled.h3`
  text-align: center;
`;

const MemberCard = styled.div`
  background-color: white;
  border: 1px solid black;
`;

const Members = ({ memberList }) => {
   
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
          </MemberCard>
        );
      })
    );

};

export default Members;
