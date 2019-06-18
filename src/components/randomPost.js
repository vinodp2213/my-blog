import React from 'react';
import axios from 'axios'
import '../App.css';

class RandomPost extends React.Component{
    constructor(){
        super()
        this.state = { 
            posts : []
        }
    }

    componentDidMount(){
        const id = Math.round((Math.random())*10)
        console.log(id)
        axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(response => this.setState(() => ({ posts : response.data })))
    }
    render(){
        return(
            <div>
                <ul>
                    {
                        this.state.posts.map(post => {
                            return(
                                <div key={post.id}> 
                                    <li><h2>{post.title}</h2></li>
                                    <li>{post.body}</li>
                                
                                </div>
                            )
                        })
                    }
                </ul>
                
            </div>
        )
    }
} 

export default RandomPost