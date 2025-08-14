import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Posts = () => {
    const [postData,setPostData]=useState([]);
    useEffect(()=>{
      const URL="https://jsonplaceholder.typicode.com/posts";
      axios.get(URL)
      .then(res=> {
        console.log(res.data)
        setPostData(res.data)
    })
      .catch(err=> console.log(err))
    },[])
  return (
    <div>
        <h2> Latest Posts</h2>
        <section>
             {postData.map(post=>
                <div key={post.id}>
                   <h4> {post.title} </h4>
                   <p> {post.body} </p>
                   <hr/>
                </div>
             )}
        </section>
    </div>
  )
}
 
export default Posts