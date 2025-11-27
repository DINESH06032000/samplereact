import React, { useEffect, useState } from 'react'

function About() {

  var[a,b]=useState()

  useEffect(()=>{

    fetch("http://localhost:8080/get")
    .then((res)=>res.json())
    .then((data)=>b(data))
  })
  return (
    <>
    
    <h1>about page</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, quidem blanditiis soluta eius nam exercitationem ab illum, nihil eligendi quo ratione, quia asperiores suscipit neque nostrum eveniet qui delectus atque.</p>
    
    {
      a&& a.map((e)=>{
        return (
          <>
          <p>{e.username}</p>
          
          </>
        )
      })
    }

    
    </>

  )
}

export default About