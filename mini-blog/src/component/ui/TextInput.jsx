import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
    width: calc(100% - 32px);
    ${(props) =>
        props.height &&
        `
        height: ${props.height}px;
    `}
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
    resize: none;
    border: 2px solid #E6E6E9;
    border-radius: 8px;
    font-family: NotoSansKR;
`;

function TextInput(props) {
    const { height, value, onChange, placeholder } = props;

    return <StyledTextarea height={height} value={value} onChange={onChange} placeholder={placeholder} />;
}

export default TextInput;