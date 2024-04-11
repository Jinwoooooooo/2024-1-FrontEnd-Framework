import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContanier: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contetnContanier: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
};

function Comment(props) {
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContanier}>
                <img
                    src="http://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                    style={styles.image}
                    />
            </div>
            <div style={styles.contetnContanier}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentTextText}>{props.comment}</span>
            </div>
        </div>
    );
}

export default Comment;