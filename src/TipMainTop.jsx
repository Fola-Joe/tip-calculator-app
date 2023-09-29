import './TipMaintop.css';
import { useState, useEffect } from 'react';
import TipMainBottom from './TipMainBottom';
import Button from './Button';

export default function TipMainTop() {

    const [billAmount, setBillAmount] = useState('');
    const [tipPercentage, setTipPercentage] = useState(0);
    const [numPeople, setNumPeople] = useState('');
    const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0);
    const [totalPerPerson, setTotalPerPerson] = useState(0);

    // function to filter non-numeric characters and permit decimal point
    const numbersOnly = (e) => {
        const input = e.target.value;
        const numbersOnly = input.replace(/[^0-9.]/g, '');
        e.target.value = numbersOnly;
    }

    const handleBillAmountChange = (e) => {
        setBillAmount(e.target.value);
        numbersOnly(e);
    };

    // selecting tip percentage when custom buttons are clicked
    const handleTipPercentageChange = (percentage) => {
        setTipPercentage(percentage);
    };
    // user inputting tip percentage
    const customTipPercentage = (e) => {
        setTipPercentage(e.target.value);
        numbersOnly(e);
    }

    const handleNumPeopleChange = (e) => {
        setNumPeople(e.target.value);
        numbersOnly(e);
    };

    // function to calculate tip amount per person and total amount
    // to be paid per person
    const calculateTip = () => {
        if (billAmount && numPeople) {
            const tip = parseFloat(billAmount * (tipPercentage / 100));
            const totalBill = tip + parseFloat(billAmount) ;
            setTipAmountPerPerson(tip / numPeople);
            setTotalPerPerson(totalBill / numPeople);
        }
    };

    // Calculate the tip whenever bill amount, tip percentage, or number of people change
    useEffect(() => {
        calculateTip();
    }, [billAmount, tipPercentage, numPeople]);


    // reset function
    const reset = () => {
        setTipAmountPerPerson(0);
        setTotalPerPerson(0);
    };

    return (
        <div>
            <h2 className="bill-h2">Bill</h2>
            <div className="bill-div">
                <input type="text"
                    aria-label="bill"
                    className="bill-input"
                    placeholder="0"
                    onChange={handleBillAmountChange}
                />
                <img src="./icon-dollar.svg" alt="dollar icon" />
            </div>
            <h2 className="tip-h2">Select Tip %</h2>
            <div className="buttons">
                <Button value={5} click={() => handleTipPercentageChange(5)} />
                <Button value={10} click={() => handleTipPercentageChange(10)} />
                <Button value={15} click={() => handleTipPercentageChange(15)} />
                <Button value={25} click={() => handleTipPercentageChange(25)} />
                <Button value={50} click={() => handleTipPercentageChange(50)} />
                <div className="">
                    <input type="text"
                        placeholder="Custom"
                        className="custom-input"
                        onChange={customTipPercentage}
                    />
                </div>
            </div>
            <h2 className="number-h2">Number of People</h2>
            <div className="number-input-div">
                <input type="text"
                    aria-label="number of people"
                    className="number-input"
                    placeholder="0"
                    onChange={handleNumPeopleChange}
                />
                <img src="./icon-person.svg" alt="person icon" />
            </div>

            <TipMainBottom
                tipAmount={tipAmountPerPerson}
                totalAmount={totalPerPerson}
                reset={reset} 
            />
        </div>
    )
}