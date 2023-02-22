import React, {Component, useState} from 'react';

const FormControled = props => {
    // constructor(props) {
    //     super(props);
    //     this.state={
    //         city: ''
    //     }
    // }

    const [city, setCity] = useState('');

    const HandleClick = () => {
        props.getWeather(city);
        // this.setState({city:''})
        setCity('');
    }

    const HandleChange = e => {
        // this.setState({city: e.target.value})
        setCity(e.target.value)
    }


    return (
        <div>
            <input onChange={HandleChange} type='text' value={city} placeholder='City'/>
            <button onClick={HandleClick}>Get weather</button>
        </div>
    );

}

export default FormControled;