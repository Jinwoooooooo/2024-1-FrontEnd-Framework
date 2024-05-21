function Card(props) {
    const { title, backgroundColor, children } = props;

    return (
        <div
            style={{
                textAlign: "center",
                width: 400,
                height: 200,
                margin: 8,
                padding: 8,
                borderRadius: 8,
                boxShadow: "0px 0px 4px grey",
                backgroundColor: backgroundColor || "white",
            }}
        >
            {title && <h1>{title}</h1>}
            {children}
        </div>
    );
}

export default Card;