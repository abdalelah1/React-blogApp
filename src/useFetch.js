import { useState,useEffect } from "react"
const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setisPending] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        setTimeout(() => {
            fetch(url).then(

                res => {
                    if (!res.ok) {
                        throw Error('couldnit fetch data')
                    }
                    return res.json();
                }
            ).then(


                data => {
                    setData(data)
                    setisPending(false)
                    setError(null)
                }).catch(err => {
                    setError(err.message)
                })
        }, 1000);

    }, [url])
    return {data,isPending,error}
}
export default useFetch