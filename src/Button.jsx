import './TipMainTop.css';

export default function Button({ value, click, selectedValue }) {

    const isActive = selectedValue === value;

    const handleClick = () => {
        click(value);
      };

    return (
        <button
            onClick={handleClick}
            className={`${isActive ? 'btn active' : 'btn'}`}
        >
            {value}%
        </button>
    )
}