import './TipMainTop.css';

export default function Button({ value, click }) {
    return (
        <button
            className="btn"
            onClick={click}
        >
            {value}%
        </button>
    )
}