import axios from "axios"
import { useState } from "react"

function Contact() {

  const [a,b]=useState("")
  const [formdata, setFormdata]=useState({
    username:"",
    password:""
  })


  function handledata(e){
    const {name,value}=e.target
    setFormdata({
      ...formdata,
      [name]:value
    })
    
  }
  function datasubmit(e){
    e.preventDefault()

    axios.post("http://localhost:8080/create", formdata,{
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then((res)=>{
      b("data submitted")
    })

  }


  return (
    <>

    <form onSubmit={datasubmit}>
      <label htmlFor="">username</label>
      <input type="text" name="username" onChange={handledata} />
      <br /><br />
      <label htmlFor="">password</label>
      <input type="password" name="password"  onChange={handledata}/>
      <br /><br />
      <input type="submit" />
    </form>
    <p>{a}</p>

    </>
  )
}

export default Contact