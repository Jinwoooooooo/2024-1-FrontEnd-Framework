import React from "react";

const students = [
    {
        id: 1,
        name: "Inje",
    },
    {
        id: 2,
        name: "Jinwoo",
    },
    {
        id: 3,
        name: "Seonjin",
    },
    {
        id: 4,
        name: "Seungjin",
    },
];

function AttendanceBook(props) {
    return (
        /*<ul>
            {students.map((student) => {
                return <li>{student.name}</li>;
            })}
        </ul> */
        <ul>
            {students.map((student, index) => {
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;