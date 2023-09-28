import './TipMaintop.css';

export default function TipMainTop() {
    return (
        <div>
            <h2 className="bill-h2">Bill</h2>
            <div className="bill-div">
                <input type="text"
                    aria-label="bill"
                    className="bill-input"
                    placeholder="0"
                />
                <img src="./icon-dollar.svg" alt="dollar icon" />
            </div>
            <h2 className="tip-h2">Select Tip %</h2>
            <div className="buttons">
                <div className="btn">5%</div>
                <div className="btn">10%</div>
                <div className="btn">15%</div>
                <div className="btn">25%</div>
                <div className="btn">50%</div>
                <div className="">
                    <input type="text"
                        placeholder="Custom"
                        className="custom-input" />
                </div>
            </div>
            <h2 className="number-h2">Number of People</h2>
            <div className="number-input-div">
                <input type="text"
                    aria-label="number"
                    className="number-input"
                    placeholder="0"
                />
                <img src="./icon-person.svg" alt="person icon" />
            </div>
        </div>
    )
}