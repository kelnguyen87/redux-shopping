import React from 'react';

export default (props) =>{
    const currencyKeys = Object.keys(props.currency);
    const currencyValue = props.currency[currencyKeys[0]];
    const currencyName = props.currency[currencyKeys[1]];
    const subtotal =  Math.round(props.subtotal * currencyValue);

    const vatPercentage = props.vat > 0 ? props.vat/100 : 0;
    const vat = subtotal > 0 ? Math.round(subtotal * vatPercentage) : 0;
    const totalCost = subtotal > 0 ? subtotal + vat : 0;

    return <tbody className="thead-light">
        <tr>
            <td scope="col"></td>
            <td scope="col"></td>
            <td scope="col">
                Subtotal
            </td>
            <td scope="col" className={'text-right'}>

                     {currencyName === 'đ' ? (`${subtotal.toLocaleString()}${currencyName}`) : `${currencyName}${subtotal.toLocaleString()}`}

            </td>
        </tr>
        <tr>
            <td scope="col"></td>
            <td scope="col"></td>
            <td scope="col">
                VAT
            </td>
            <td scope="col" className={'text-right'}> {currencyName === 'đ' ? (`${vat.toLocaleString()}${currencyName}`) : `${currencyName}${vat.toLocaleString()}`}</td>
        </tr>
        <tr>
            <td scope="col"></td>
            <td scope="col"></td>
            <td scope="col">
                <h4 className={'shop-cart-total'}>Total</h4>
            </td>
            <td scope="col" className={'text-right'}>
                <h4 className={'shop-cart-total'}>
                {currencyName === 'đ' ? (`${totalCost.toLocaleString()}${currencyName}`) : `${currencyName}${totalCost.toLocaleString()}`}
                </h4>
            </td>
        </tr>
    </tbody>
}

