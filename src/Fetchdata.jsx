import { useEffect, useState } from "react"

function Fetchdata() {

    var [data1, setData] = useState();

    useEffect(() => {
        fetch("http://localhost:8080/get").then((res) => res.json()).then((e) => setData(e))
    }, [])

    return (
        <>
            {
                data1 && data1.map((it) => {
                  
                    
                    return (
                        <>
                            <h1>{it.username}</h1>
                        </>
                    )

                })
            }
        </>
    )
}

export default Fetchdata