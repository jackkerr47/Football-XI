interface ButtonProps {
    label: string;
    onClick: () => void;
}

function Button() {
    return <button className="button">Click Me</button>;
}

export default Button;
