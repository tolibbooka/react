import React, { useState, useEffect } from 'react';
import axios from 'axios';
const CrudBeckend = () => {
    const [data, setData] = useState([]);
    const [modal, setModal] = useState(false);
    const [input, setInput] = useState({
        username: "",
        password: '',
        img: "",
        code: ''
    })
    const modalOpen = () => {
        setModal(!modal)
    }
    const jsonData = () => {
        axios({
            url: " https://rasuljon.uz/back-end/crud.php?read_json"
        })
            .then((res) => {
                console.log(res.data);
                setData([...res.data])
            })
            .catch((err) => {
                console.log(err);
                const { code } = err;
                setInput({ ...input, code: code })

                if (code) {
                    alert('natija yoq')
                }
            })
    }
    useEffect(() => {
        jsonData()
    }, [])

    // add
    const send = () => {
        e.proventDefault();
        console.log(input);
        let fromData = new FromData();////malumot jonatish uchun ishlatiladi....
        fromData.append('status', 'add_data')
        fromData.append('username', 'input.username')
        fromData.append('password', 'input.password')
        fromData.append('img','input.img')
        axios({
            url: "https://rasuljon.uz/back-end/crud.php",
            method: 'post',
            data: fromData
        })
            .then((res) => {
                console.log(res.data);
                if (res.status === 200) {
                    jsonData();
                    modalOpen();
                    setInput({
                        username: "",
                        password: '',
                        img: "",
                        code: ''
                    })
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const inputFun = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const imgUpload = (e) => {
        setInput({ ...input, img: e.target.files[0] })
        console.log(e.target.files[0]);
    }
    const deleteFun = (id) => {
        let fromData = new fromData();
        fromData.append('status', 'delete_data')
        fromData.append('id, id')
        axios({
            method: 'post',
            usr: "https://rasuljon.uz/back-end/crud.php",
            data: fromData
        })
            .then((res) => {
                console.log(res.data);
                if (res.status === 200) {
                    jsonData();
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div className='crud'>
            <h1>Add crud</h1>
            <button onClick={modalOpen}>Add</button>

            <table>
                <thead>
                    <th>id</th>
                    <th>img</th>
                    <th>Username</th>
                    <th>password</th>
                    <th>activ</th>
                </thead>
                <tbody>
                    {
                        data.map((val, i) => (
                            <tr key={val.id}>
                                <td>{i + 1}</td>
                                <td> <img style={{ width: "50px", height: "50px" }} src={val.img} alt="" /> </td>
                                <td>{val.username}</td>
                                <td>{val.password}</td>
                                <td>
                                    <button>shov</button>
                                    <button>edit</button>
                                    <button onClick={() => deleteFun(val.id)}>delit</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className={modal ? "modal activ" : "modal"}>
                <div className="modal_body">
                    <form onSubmit={send} >
                        <input type="text" onChange = {inputFun} name="username" value = {input.username} placeholder="username" />
                        <input type="password" onChange = {inputFun} name="password" value = {input.password} placeholder = "password" />
                        <input type="flie" onChange = {imgUpload} name="img" placeholder = "password" />
                        <button type="submit">ADD</button>
                    </form>
                    <button className='close' onClick = {modalOpen}>X</button>
                </div>
            </div>
        </div>
    )
}
export default CrudBeckend;
