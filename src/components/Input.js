import React from 'react'
import styled from 'styled-components'

const InputStyled = styled.label`
display: inline-flex;
background: white;
align-items: center;
box-shadow: 0 2px 9px 0 rgba(0,0,0, .05);
padding: 0 2rem;
border-radius: 5px;
width: 100%;
i {
    margin-right: 1em;
    color: #c4c4c4;
}
input {
    /* width: 100%; */
    flex: 1;
    border: none;
    height: 48px;
    line-height: 48px;
    font-size: .7em;
    outline: none;
    &::-webkit-input-placeholder {
        color: #c4c4c4;
    }
}
`

function Input({ ...props }) {
    return (
        <InputStyled>
            <i className="fas fa-search"></i>
            <input type="text" {...props} />
        </InputStyled>
    )
}

export default Input;
