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


const Form = () => {

  return (

    <MemberForm>
        <Name>
            <label htmlFor='name' hidden>Member Name</label>
            <input name='name' type='text' placeholder='member name' />
        </Name>

        <Email>
            <label htmlFor='email' hidden>Email</label>
            <input name='email' type='email' placeholder='email address' />
        </Email>

        <Role>
            <label htmlFor='role' myAttr >Member Role</label>
            <select name='role' type='' />
        </Role>
    </MemberForm>
  );

};


export default Form;