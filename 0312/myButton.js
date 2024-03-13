function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false);

    return React.createElement(
        'button',
        { onClick: () => setIsClicked(true) },
        isClicked ? 'Clicked!' : 'Click here!'
    )
}

const domContanier = document.querySelector('#root');
const root = ReactDOM.createRoot(domContanier);
root.render(React.createElement(MyButton));