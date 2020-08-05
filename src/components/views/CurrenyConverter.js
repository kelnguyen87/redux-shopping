import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeCurrency} from '../../actions';
class CurrenyConverter extends Component {

    currencyChangeHandler = (event) => {
        this.props.changeCurrencyProp(event.target.value)
    };

    render() {
        console.log(this.props);
        return (
            <div className="form-group">
                {this.props.showLabel ? <label><h5>Convert Currency</h5></label> : null}
                <select className={'form-control'}
                    value={Object.keys(this.props.usedCurrencyProp)[0]}
                    onChange={this.currencyChangeHandler}
                >
                    { Object.keys(this.props.exchangeRatesProps.rates).map((rateName, index) => (
                             <option
                                key={index}
                                value={this.props.exchangeRatesProps.rates[rateName]}
                            >
                                {rateName}
                            </option>
                        ))
                    }
                </select>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        exchangeRatesProps: state.exchangeRates,
        usedCurrencyProp:state.usedCurrency
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeCurrencyProp: (currencyName) => dispatch(changeCurrency(currencyName))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CurrenyConverter);
