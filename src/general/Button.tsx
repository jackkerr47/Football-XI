import './Button.css';

interface ButtonProps {
    label: string;
    onClick: (arg) => void;
}

function Button({ label, onClick }: ButtonProps) {
    return (
        <button className="button" onClick={onClick}>
            {label}
        </button>
    );
}

export default Button;
