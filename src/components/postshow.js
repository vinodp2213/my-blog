import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class PostShow extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            post:{},
            posts:[],
            author:{},
            comments:[],
            currentId : this.props.match.params.id
        }
        
    }

    

    
    componentDidMount(){
       const MatchId = this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/posts/${MatchId}`)
            .then(response => this.setState(()=> {
            const post = response.data
            const u_id = response.data.userId
            axios.get(`https://jsonplaceholder.typicode.com/users/${u_id}`)
                        .then(response => this.setState(()=> ({post, author: response.data})))                    
            }))
       

        axios.get(`https://jsonplaceholder.typicode.com/comments/?postId=${MatchId}`)
            .then(response => this.setState(()=> ({ comments: response.data})))
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => this.setState(()=> ({posts:response.data})))
   }
    render(){
        return(
            <div>
                <h2> PostId - {this.state.currentId}</h2>
                <h2>{this.state.post.title}</h2>
                <p>{this.state.post.body}</p>
                    <span align='right'>Author --<Link to={`/author/${this.state.author.id}`} >{this.state.author.name}</Link></span>
                <br/>
                
                <br/>
                <h4>Comments for this post</h4><br/>
                {this.state.comments.map(comment =>{
                    return (
                            <div key={comment.id}><h5>Name : {comment.name}</h5>
                                    <p><b>Email</b> : {comment.email}</p>
                                    <p><b>Comment</b> : {comment.body}</p>
                                <br/>
                            </div> 
                        )              
                    })
                }
                
            </div>
        )
    }
}
export default PostShow