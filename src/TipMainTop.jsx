import './TipMainTop.css';
import { useState, useEffect } from 'react';
import TipMainBottom from './TipMainBottom';
import Button from './Button';

export default function TipMainTop() {

    const [billAmount, setBillAmount] = useState('');
    const [tipPercentage, setTipPercentage] = useState('');
    const [numPeople, setNumPeople] = useState('');
    const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0);
    const [totalPerPerson, setTotalPerPerson] = useState(0);
    const [selectedTipPercentage, setSelectedTipPercentage] = useState(0);
    const [numPeopleError, setNumPeopleError] = useState(false);

    const handleBillAmountChange = (e) => {
        // filter non-numeric characters and permit decimal point
        const input = e.target.value;
        const numbersOnly = input.replace(/[^0-9.]/g, '');
        e.target.value = numbersOnly;
        setBillAmount(numbersOnly);
    };

    // selecting tip percentage when custom buttons are clicked
    const handleTipPercentageChange = (percentage) => {
        setTipPercentage(percentage);
        setSelectedTipPercentage(percentage);
    };
    // user inputting tip percentage
    const customTipPercentage = (e) => {
        // filter non-numeric characters and permit decimal point
        const input = e.target.value;
        const numbersOnly = input.replace(/[^0-9.]/g, '');
        e.target.value = numbersOnly;
        setTipPercentage(numbersOnly);
    }

    const handleNumPeopleChange = (e) => {
        // filter non-numeric characters and permit decimal point
        const input = e.target.value;
        const numbersOnly = input.replace(/[^0-9.]/g, '');
        e.target.value = numbersOnly;
        setNumPeople(numbersOnly);

        if (parseFloat(numbersOnly) === 0) {
            setNumPeopleError(true); // Set the error state
        } else {
            setNumPeopleError(false); // Clear the error state
        }
    };

    // function to calculate tip amount per person and total amount
    // to be paid per person
    const calculateTip = () => {
        if (billAmount && numPeople) {
            const tip = parseFloat(billAmount * (tipPercentage / 100));
            const totalBill = tip + parseFloat(billAmount);
            if (numPeopleError === true) {
                setTipAmountPerPerson(0);
                setTotalPerPerson(0);
            } else {
                setTipAmountPerPerson(tip / numPeople);
                setTotalPerPerson(totalBill / numPeople);
            }
        }
    };

    // Calculate the tip whenever bill amount, tip percentage, or number of people change
    useEffect(() => {
        calculateTip();
    }, [billAmount, tipPercentage, numPeople]);


    // reset function
    const reset = () => {
        setBillAmount('');
        setTipPercentage('');
        setSelectedTipPercentage(0);
        setNumPeople('');
        setTipAmountPerPerson(0);
        setTotalPerPerson(0);
    };

    return (
        <div className="TipMainTop">
            <section className="main-top">
                <h2 className="bill-h2">Bill</h2>
                <div className="bill-div">
                    <input type="text"
                        aria-label="bill"
                        className="bill-input"
                        placeholder="0"
                        value={billAmount}
                        onChange={handleBillAmountChange}
                    />
                    <img src="./icon-dollar.svg" alt="dollar icon" />
                </div>
                <h2 className="tip-h2">Select Tip %</h2>
                <div className="buttons">
                    <Button value={5}
                        click={() => handleTipPercentageChange(5)}
                        selectedValue={selectedTipPercentage}
                    />
                    <Button value={10}
                        click={() => handleTipPercentageChange(10)}
                        selectedValue={selectedTipPercentage}
                    />
                    <Button value={15}
                        click={() => handleTipPercentageChange(15)}
                        selectedValue={selectedTipPercentage}
                    />
                    <Button value={25}
                        click={() => handleTipPercentageChange(25)}
                        selectedValue={selectedTipPercentage}
                    />
                    <Button value={50}
                        click={() => handleTipPercentageChange(50)}
                        selectedValue={selectedTipPercentage}
                    />
                    <div className="">
                        <input type="text"
                            placeholder="Custom"
                            className="custom-input"
                            value={tipPercentage}
                            onChange={customTipPercentage}
                        />
                    </div>
                </div>
                <div className="num-people-display">
                    <h2 className="number-h2">Number of People</h2>
                    {numPeopleError && <p className="error-message">Cannot be zero</p>}
                </div>
                {/* <h2 className="number-h2">Number of People</h2> */}
                <div className="number-input-div">
                    <input type="text"
                        aria-label="number of people"
                        className={`${numPeopleError ? 'number-input error' : 'number-input'}`}
                        placeholder="0"
                        value={numPeople}
                        onChange={handleNumPeopleChange}
                    />
                    <img src="./icon-person.svg" alt="person icon" />
                </div>
            </section>
            <TipMainBottom
                tipAmount={tipAmountPerPerson}
                totalAmount={totalPerPerson}
                reset={reset}
            />
        </div>
    )
}