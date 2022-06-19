import React from 'react';

const _renderCurrencies =(props) => {
    const { bpi } = props
    const currencies = Object.keys(bpi)
    return currencies.map(currency => (
        <div key={currency}>
            1 BTC is {bpi[currency].rate}
            <span>{currency}</span>
        </div>
    )
    )
}

const Presentational = (bpi) => {
    return (
        <div>
        <h4>Fetch</h4>
        {_renderCurrencies(bpi)}
    </div>
    );
}

export default Presentational;
