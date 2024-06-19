import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: NotoSansKR;
`;

const Contanier = styled.div`
    width: 100%;
    max-width: 720px;
    
    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

function PostWritePage(props) {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return (
        <Wrapper>
            <Contanier>
                <Button 
                    title="뒤로 가기"
                    onClick={() => {
                        navigate("/");
                    }}
                />
                <TextInput
                    height={20}
                    value={title}
                    placeholder="제목을 입력하세요."
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />
                <TextInput
                    height={480}
                    value={title}
                    placeholder="여기에 내용을 입력하세요."
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />
                <Button 
                    title="글 작성하기"
                    onClick={() => {
                        navigate("/");
                    }}
                />
            </Contanier>
        </Wrapper>
    );
}

export default PostWritePage;