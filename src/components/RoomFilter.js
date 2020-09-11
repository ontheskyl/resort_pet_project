import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../context';
import Title from './Title';

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomList({rooms}) {
    const context = useContext(RoomContext);
    const{
        handleChange, 
        type, 
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets 
    } = context;

    let types = getUnique(rooms, 'type');
    types = ['all', ...types];
    //map to jsx

    types = types.map((item, index) => {
        return <option value = {item} key = {index}> {item} </option>
    })

    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index) => {
        return <option value = {item} key = {index}> {item} </option>
    })

    return (
        <section className = "filter-container">
            <Title title = "Search rooms"/>
            <form className = "filter-form">
                {/*Select Type*/}
                <div className = "form-group">
                    <label htmlFor = "type">room type</label>
                    <select name = "type" id = "type" value = {type} className = "form-control" onChange = {handleChange}>
                        {types}
                    </select>
                </div>

                {/*Select Guests*/}
                <div className = "form-group">
                    <label htmlFor = "capacity">Guests</label>
                    <select name = "capacity" id = "capacity" value = {capacity} className = "form-control" onChange = {handleChange}>
                        {people}
                    </select>
                </div>

                {/*Room Price*/}
                <div className = "form-group">
                    <label htmlFor = "price">Room Price ${price}</label>
                    <input name = "price" type = "range" value = {price} id = "price" min = {minPrice}
                    max = {maxPrice} className = "form-control" onChange = {handleChange} />
                </div>

                {/*Room Size*/}
                <div className = "form-group">
                    <label htmlFor = "size">Room size</label>
                    <div className = "size-inputs">
                        <input name = "minSize" type = "number" value = {minSize} id = "size"
                         className = "size-input" onChange = {handleChange} />
                         <input name = "maxSize" type = "number" value = {maxSize} id = "size"
                         className = "size-input" onChange = {handleChange} />
                    </div>
                </div>

                {/*Extras*/}
                <div className = "form-group">
                    <div className = "single-extra">
                        <input name = "breakfast" type = "checkbox" id = "breakfast" 
                        checked = {breakfast} onChange = {handleChange} />
                        <label htmlFor = "breakfast" >breakfast</label>
                    </div>

                    <div className = "single-extra">
                        <input name = "pets" type = "checkbox" id = "pets" 
                        checked = {pets} onChange = {handleChange} />
                        <label htmlFor = "pets" >pets allowed</label>
                    </div>
                </div>

            </form>
        </section>
    )
}
