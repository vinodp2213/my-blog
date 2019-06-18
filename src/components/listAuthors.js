import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../App.css';

class ListAuthor extends React.Component{
    constructor(){
        super()
        this.state = { 
            authors : []
        }
    }

    componentDidMount(){
        axios.get(`http://jsonplaceholder.typicode.com/users`)
            .then(response => this.setState(() => ({ authors : response.data })))

        axios.get(`http://localhost:3005/tags`)
            .then(response => this.setState(() => console.log(response.data) ))
    }
    render(){
        return(
            <div>
                <h2 align='center'>Listing Authors : {this.state.authors.length}</h2>
                <ul key={this.state.authors.id}>
                    {
                        this.state.authors.map(author => {
                            return(
                                <div> 
                                    <li key={author.id}><Link to={`/author/${author.id}`}>{author.name}</Link></li>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
} 

export default ListAuthor