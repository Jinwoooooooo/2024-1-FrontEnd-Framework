import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "이인제",
        comment: "안녕하세요, 소플입니다.",
    },
    {
        name: "정진우",
        comment: "리액트 꿀잼입니다 ?",
    },
    {
        name: "낭만어부",
        comment: "아, 분분한 낙화. 왜 아픈 상처에 소금을 뿌리십니까.",
    },
];

function CommentList(props) {
    return(
        <div>
            {comments.map((comment) => { 
            return (
                <Comment name = {comment.name} comment = {comment.comment} />
            );
        })}
        </div>
    );
}

export default CommentList;