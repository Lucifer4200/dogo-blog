import { useState, useEffect } from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch'

const Home = () => {

    const { blogs, isPending, error } = useFetch('http://localhost:5000/Blogs')

    return (
        <div className="homepage">
            { error && <div> { error } </div> }
            { isPending && <div>Loading....</div> }
            {blogs.length > 0 ? (<BlogList blogs={blogs} title='All Blogs!' />) : ('Just wait a seccond!') } 
        </div>
    )
}

export default Home
