import './TipMainBottom.css';

export default function TipMainBottom({ tipAmount, totalAmount, reset }) {
    return (
        <div className="TipMainBottom">
            <div className="tip-amount">
                <div className="tip">
                    <h2>Tip Amount</h2>
                    <h3>/ person</h3>
                </div>
                <h4 className="figure-1">${tipAmount.toFixed(2)}</h4>
            </div>
            <div className="tip-total">
                <div className="total">
                    <h2>Total</h2>
                    <h3>/ person</h3>
                </div>
                <h4 className="figure-2">${totalAmount.toFixed(2)}</h4>
            </div>
            <button className="reset-btn" onClick={reset}>Reset</button>
        </div>
    )
}