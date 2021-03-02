import { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [blogs, setBlogs] = useState([])
    const [isPending, setIsPanding] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
                if(!res.ok) {
                    throw Error ('Could not fetch the data for the resouces');
                }
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsPanding(false);
                setError(null);
            })
            .catch(err =>{
                setIsPanding (false);
                setError(err.message);
            })
        }, 500)
    }, [url])

    return (
        { blogs, isPending, error }
    )
}

export default useFetch
