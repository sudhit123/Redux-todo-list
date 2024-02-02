import React, { useState } from 'react'
import { increment, decement, dataAdd, dataRemove, dataUpdate } from '../redux/Reducer'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
const Counter = () => {
    const dispatch = useDispatch()
    const list = useSelector((state) => state.todolist.list)
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [city, setCity] = useState("")
    const [id, setId] = useState(-1)
    const handleEdit = (display, index) => {
        setName(display.name)
        setAge(display.age)
        setCity(display.city)
        setId(index)
    }
    const handleClear = () => {
        setName("")
        setAge("")
        setCity("")
        setId(-1)
    }
    return (
        <div>          
            <div>
                <lable>Name</lable>
                <input type='text' value={name} onChange={(event) => { setName(event.target.value) }} />
            </div>
            <div>
                <lable>Age</lable>
                <input type='number' value={age} onChange={(event) => { setAge(event.target.value) }} />
            </div>
            <div>
                <lable>City</lable>
                <input type='text' value={city} onChange={(event) => { setCity(event.target.value) }} />
            </div>
            {
                id >= 0 ? (
                    <>
                        <button onClick={() => {
                            dispatch(dataUpdate({ name, age, city, id }))
                            setName("")
                            setAge("")
                            setCity("")
                            setId(-1)
                        }}>Update</button>
                        <button onClick={handleClear}>clear</button>
                    </>
                ) : (
                    <button onClick={() => {
                        dispatch(dataAdd({ name: name, age: age, city: city }))
                        setName("")
                        setAge("")
                        setCity("")
                    }}>Submit</button>

                )
            }
            <table>
                <tr>
                    <td>NAME</td>
                    <td>AGE</td>
                    <td>CITY</td>
                </tr>
                {
                    list.map((display, index) => {
                        return (
                            <tr>
                                <td>{display.name}</td>
                                <td>{display.age}</td>
                                <td>{display.city}</td>
                                <td>
                                    <button onClick={() => { handleEdit(display, index) }}>Edit</button>
                                    <button onClick={() => { dispatch(dataRemove(index)) }}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
        </div >
    )
}

export default Counter