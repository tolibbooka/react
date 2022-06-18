// import { json } from 'body-parser';
// import React from 'react';
// import { useState } from 'react';
// import Input from '../12-darst/input';


// const Crud = () =>{
//     const [modal,setModal] = useState(false);
//     const modalOpen = () =>{
//         setModal (!modal)
//         setInput({
//             name:'',
//             age:'',
//             id:""
//         })
//     }
//     const [data, setData] = useState(JSON.parse(localStorage.getItem("data")) || []);
//     const localSave = () =>{
//         if(localStorage.getItem('data')){
//             setData(JSON.parse (localStorage.getItem("data")) || [])
//         }
//     }
//     const send = ()=>{
//         e.preventDefauld();
//         if(Input.id===''){
//             if(localStorage.getItem('data')){
//                 localStorage.getItem('data',JSON.stringify([JSON.parse(localStorage.getItem('data')),{...input,id:new Data().getTime}]))
//             }else{
//                 localStorage.getItem('data',JSON.stringify([{...input,id:new Data().getTime}]))

//             }
//             localSave()
//         }e
//     }
// }

// export default Local;