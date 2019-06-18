import React from 'react';
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItemHeading } from 'reactstrap';

class Posts extends React.Component{
    constructor(){
        super()
        this.state = {
            posts : []
        }
    }

    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(response => this.setState(() => ({ posts : response.data})))
    };
    render(){
        return(
            <div className="listcolor">
                <h2>Listing posts : {this.state.posts.length}</h2>
                
                   {
                       this.state.posts.map(post => {
                           return (
                               <div>
                               <ListGroup>
                                    <ListGroupItemHeading key = {post.id}><Link to={`/posts/${post.id}`}  className="postlink">{post.title}</Link></ListGroupItemHeading>
                                </ListGroup>
                               </div>
                           )
                       })
                   }
                
            </div>
        )
    }
} 

export default Posts