import React from 'react'
import {connect} from "react-redux";
import {buyIceCream} from '../redux'

function IceCreamContainer(props) {
    return(
        <div>
            <h2>Number of iceCreams: {props.numberOfIceCream}</h2>
            <button onClick={props.buy_iceCream}>Buy IceCream</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return({
        numberOfIceCream: state.iceCream.numOfIceCream
    })
}

const mapDispatchToProps = dispatch => {
    return({
        buy_iceCream: () => dispatch(buyIceCream())
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(IceCreamContainer);
