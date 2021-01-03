import React, {useState} from 'react';
import {connect} from "react-redux";
import {buyCake} from "../redux";

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1);
    return(
        <div>
            <h2>Number of cake: {props.numberOfCakes}</h2>
            <input type='text' value={number}
                   onChange={e => setNumber(e.target.value)}/>
            <button onClick={() => props.buy_cake(number)}>buy {number} cake</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return({
        numberOfCakes: state.cake.numOfCakes
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        buy_cake: (number) => dispatch(buyCake(number))
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewCakeContainer)

