import React from 'react';
import  {buyCake}  from '../redux'
import {connect} from "react-redux";

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes: {props.numberOfCakes}</h2>
            <button onClick={props.buy_cake}>Buy cake</button>
        </div>
    )
}
// mapStateToProp: state from redux store are mapped to our props
const mapStateToProps = state => {
    return({
        numberOfCakes: state.cake.numOfCakes
    })
}

//mapDispatchToProps: dispatch from redux store are mapped to our props
const mapDispatchToProps = dispatch => {
    return{
        buy_cake: () => dispatch(buyCake())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer);
