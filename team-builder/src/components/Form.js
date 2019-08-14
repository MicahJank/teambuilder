import React, { useState } from 'react';

import styled from 'styled-components';

const MemberForm = styled.form`

    display: flex;
    flex-direction: column;
    width: 30%;
    margin: auto;

    input, select {
        height: 30px;
        padding: 5px;
    }

`;

const Name = styled.div`
    margin-bottom: 20px;
`;

const Email = styled.div`
    margin-bottom: 20px;
`;

const Role = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

const AddMemberButton = styled.button`

    padding: 10px;

`;


const Form = (props) => {

    
    const [member, setMember] = useState({ name: '', email: '', role: '' });


    const changeHandler = event => {
        setMember({ ...member, [event.target.name]: event.target.value })
    };

    // function that the submit button the form will call
    const submitForm = event => {
        event.preventDefault();
        const newMember = { ...member, id: Date.now() }

        props.addNewMember(newMember);
        
    };

  return (

    <MemberForm onSubmit={submitForm}>
        <Name>
            <label htmlFor='name' hidden>Member Name</label>
            <input name='name' type='text' placeholder='member name' value={member.name} onChange={changeHandler} />
        </Name>

        <Email>
            <label htmlFor='email' hidden>Email</label>
            <input name='email' type='email' placeholder='email address' value={member.email} onChange={changeHandler} />
        </Email>

        <Role>
            <label htmlFor='role' >Member Role</label>
            <select name='role' onChange={changeHandler}> 
                <option value=''>Select Position</option>
                <option value='Backend Engineer'>Backend Engineer</option>
                <option value='Frontend Engineer'>Frontend Engineer</option>
                <option value='UX Designer'>Designer</option>
                <option value='Project Manager'>Project Manager</option>
                <option value='Tester'>Tester</option>
                <option value='Coffee Maker'>Coffee Maker</option>
            </select>
        </Role>

        <AddMemberButton type='submit'>Add Member</AddMemberButton>
    </MemberForm>
  );

};


export default Form;