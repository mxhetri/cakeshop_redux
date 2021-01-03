import React from 'react';
import {connect} from "react-redux";
import {buyCake, buyIceCream} from "../redux";

function ItemContainer(props) {
    return(
        <div>
            <h2>Items: {props.item}</h2>
            <button onClick={props.buy_item}>Buy Items</button>
        </div>
    )
}
// props of the component itself which by convention referred to as ownProps
//  i.e. providing props that the components have which we can
//  use of it

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes
                                : state.iceCream.numOfIceCreams
    return({
            item: itemState
    })
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake
                        ? () => dispatch(buyCake())
                        : () => dispatch(buyIceCream())
    return({
        buy_item: dispatchFunction
    })
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemContainer)
