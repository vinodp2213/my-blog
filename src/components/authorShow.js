import React from 'react';
import axios from 'axios';


class AuthorShow extends React.Component{
    constructor(){
        super()
        this.state = {
            author : {},
            posts : [],
        }
    }

    
    componentDidMount() {
        const id = this.props.match.params.id
        const promise1 = axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
        const promise2 = axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)

        Promise.all([promise1, promise2])
            .then(response => this.setState(() => ({ author : response[0].data, posts : response[1].data })))
    }
    
    render(){
        return(
            <div>
                <h2>{this.state.author.name}</h2>
                <p>{this.state.author.email}</p>
                <h4>Posts of {this.state.author.name}</h4>
                <ul>
                    {
                        this.state.posts.map(post => {
                            return(
                                <div>
                                    <li key={post.id}>{post.title}</li>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default AuthorShow