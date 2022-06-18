import React, { useState } from 'react';

const Input = () => {
    const [input, setInput] = useState({
        name: "",
        password: "",
        email: '',
        country: '',
        id: null
    })
    const [result, setResult] = useState(true);
    const [data, setData] = useState([]);
    const sendFun = (e) => {
        e.preventDefault();
        if (result) {
            setData([...data, { ...input, id: new Date().getTime() }])
        }
        else {
            setData(data => data.map((val) => val.id ? input : val))
            setResult(true)
            setInput({
                name: "",
                password: "",
                email: '',
                country: '',
                id: null
            })
        }
        setInput({
            name: "",
            password: "",
            email: '',
            country: '',
            id: null
        })
        modalFun()
        const [modal, setModal] = useState(false);
        const inputFun = (e) => {
            setInput({ ...input, [e.target.name]: e.target.value });
        }
        const modalFun = () => {
            setModal(!modal)
            setInput({
                name: "",
                password: "",
                email: '',
                country: '',
                id: null
            })
            setResult(true)
        }
        const delitFun = (id) => {
            console.log(id);
            setData(data => data.filter((val) => val.id === id))
        }
        const editFun = (val) => {
            modalFun();
            setInput({
                name: val.name,
                password: val.password,
                email: val.email,
                country: val.country,
                id: val.id
            })
            setResult(false)
        }
    }
        return (
            <div>
<div className="from">
                    {/* modal */}
                    <button onClick={modalFun}>ADD</button>
                    <div className={modal ? "modal_crut activ" : 'crut'}>
                        <div className="modal_body froms">
                            <h1>Form</h1>
                            <form onSubmit={sendFun}>
                                <input type="text" name='name' value={input.name} onChange={inputFun} />
                                <input type="password" name='password' value={input.password} onChange={inputFun} />
                                <input type="email" name='email' value={input.email} onChange={inputFun} />
                                <input type="text" name='country' value={input.country} onChange={inputFun} />
                                <button className='btn'>{result ? "ADD" : "EDIT"}</button>
                            </form>
                        </div>
                        <button className="close" onClick={modalFun}>X</button>
                    </div>
                </div>
                    <table border='1'>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>password</th>
                                <th>email</th>
                                <th>country</th>
                                <th>
                                    <button>Shadow</button>
                                    <button>Edit</button>
                                    <button>Delit</button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((val, i) => (
                                    <tr key={val.id}>
                                        <td>{i + 1}</td>
                                        <td>{val.name}</td>
                                        <td>{val.password}</td>
                                        <td>{val.email}</td>
                                        <td>{val.country}</td>
                                        <td>
                                            <button>Shadow</button>
                                            <button onClick={() => editFun(val)}>Edit</button>
                                            <button onClick={() => delitFun(val.id)}>Delit</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            
        )
    }

export default Input;

