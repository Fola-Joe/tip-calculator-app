import './TipMainBottom.css';

export default function TipMainBottom() {
    return (
        <div className="TipMainBottom">
            <div className="tip-amount">
                <div className="tip">
                    <h2>Tip Amount</h2>
                    <h3>/ person</h3>
                </div>
                <h4 className="figure-1">$0.00</h4>
            </div>
            <div className="tip-total">
                <div className="total">
                    <h2>Total</h2>
                    <h3>/ person</h3>
                </div>
                <h4 className="figure-2">$0.00</h4>
            </div>
            <button className="reset-btn">Reset</button>
        </div>
    )
}