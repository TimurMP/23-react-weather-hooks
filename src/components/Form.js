import React from 'react';

const Form = ({getWeather}) => {

    const getCity = e => {
        e.preventDefault();
        const city = e.currentTarget.city.value;
        getWeather(city)
    }
    return (
        <form onSubmit={getCity}>
            <input type='text' name='city' placeholder='City'/>
            <button type='submit'>Get weather</button>
        </form>

    );
}

export default Form;