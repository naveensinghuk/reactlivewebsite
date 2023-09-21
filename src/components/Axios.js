    // import React, { useEffect, useState } from 'react'
    // import axios from 'axios';

// function Axios() {
//     const [userdata, setdaat]=useState([]);
//     useEffect(()=>{
//         axios.get("https://jsonplaceholder.typicode.com/users")
//         .then((result)=>{
//             // console.log(result.data)
//             setdaat(result.data)
//             console.log(userdata)
//         })
//     }, [])
    
//   return (
//     <div>
//     {userdata.map((finalresult)=>{
//         return(<div>{finalresult.name}</div>)
//     })}
//     </div>
//   )
// }

// export default Axios


import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Axios() {
    const[userdata, setdata]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((test)=>{
            console.log(test);
            setdata(test.data)
            
        })
    }, [])

  return (
    <div>
    <h1>User Name </h1> 
      {userdata.map((finaldata)=>{return(<><div>{finaldata.name}</div></>)})} 
      <h1>User ID</h1> 
      {userdata.map((finaldata)=>{return(<><div>{finaldata.id}</div></>)})}
      </div>
  )
}

export default Axios
