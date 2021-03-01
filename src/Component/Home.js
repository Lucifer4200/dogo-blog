import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {

    const [blogs, setBlogs] = useState([]);
    const [isPending, setIsPanding] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/Blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsPanding(false);
            })
        }, 500)
    }, [])

    return (
        <div className="homepage">
            { isPending && <div>Loading....</div> }
            {blogs.length > 0 ? (<BlogList blogs={blogs} title='All Blogs!' />) : ('Just wait a seccond!') } 
        </div>
    )
}

export default Home
