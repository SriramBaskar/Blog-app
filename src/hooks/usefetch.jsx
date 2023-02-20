import { useState, useEffect } from "react"

export const useFetch = (url, method='GET') => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [options, setOptions] = useState(null)
    
    const optiondata = (data) => {
      if (method === 'POST') { // Except the 'GET' method other need option        setOptions([])
        setOptions({
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
      } else  if (method === 'PATCH') { // Except the 'GET' method other need option        setOptions([])
        setOptions({
          method: 'PATCH',
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
      } else if (method === 'DELETE') {
        setOptions({
          method: 'DELETE'
        })
      }
    }

    useEffect(() => {
        const fetchPosts = async () => {
            
          setIsPending(true)  
          const response = await fetch(url, {...options})
          const jsonResponse = await response.json()
    
          if(response.ok) {
            setData(jsonResponse)
            setError('')
            setIsPending(false)
          }
    
          if(!response.ok) {
            setError(jsonResponse.error)
            setIsPending(false)
          }
        }
        if (method === 'GET') {
          fetchPosts()
        } else if((method === 'POST' ||  method === 'PATCH' || method === 'DELETE') && options) {
          fetchPosts(options)
        }
      }, [url, method, options]) //adding url to dependency

    return {data, error, isPending, optiondata} // prop's for useFetch
}