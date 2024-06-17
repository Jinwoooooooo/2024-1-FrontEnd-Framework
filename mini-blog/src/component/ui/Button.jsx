import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border-width: 1px;
    border-radius: 8px;
    border: 1px solid #dfe1e5;
    cursor: pointer;
    font-family: NotoSansKR;
    :hover {
        color: white;
        background-color: black;
        transition: 0.5s;
    }
    
`;

function Button(props) {
    const { title, onClick } = props;

    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}

export default Button;