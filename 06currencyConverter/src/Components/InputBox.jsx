import React,{useId} from 'react'


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency ="USD",
    amountDisable=false,
    currencyDisable=false,
    className = "",
}) {
   
    const idForLabel= useId();
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label  htmlFor={idForLabel} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={idForLabel}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    disabled={amountDisable}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none text-blue-600"
                    disabled={currencyDisable}
                    value={selectCurrency}
                    // why we use && -> this is basically a short-circuit condition telling
                    // if onCurencyChange exists the on onCurrencyChange(e.target.value) will
                    //execute and then pass e.target.value in onCurrencyChange funcion 
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                        
                        {currencyOptions.map((currency)=>(
                        <option value={currency}
                        //on passing the value of currency you have to uppercase it as 
                        //input in the API.
                        key={currency}
                        >
                            {currency}
                        </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
