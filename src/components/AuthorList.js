import React from 'react';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom'

const AuthorList = (props) =>{
    const {setAuthors} = props;
    const history = useHistory
    const deleteAuthor = (id, arrIndex) =>{ 
        axios.delete('http://localhost:8000/api/authors/' + id)
            .then(res => {
                // const copyState =[...props.Author];
                // copyState.splice(arrIndex,1);
                // setAuthors = copyState
            })
            .catch(err => console.error(err));
        }
    return (
        <div>
            <table className="table table-dark">
            <thead>
                <tr>
                <th scope="col" >Author</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
            {props.author.map((author, idx) =>
                <tr>
                <th scope="row"><Link key ={idx} to={`/Authors/${author._id}`}>{author.name}</Link></th>
                <td>
                    <button className='btn btn-info mx-3'>
                        <Link to= {`/authors/${author._id}`}>
                            Edit Author
                        </Link>
            </button></td>
                <td><button onClick = {(e) => {deleteAuthor(author._id, idx)}} className='btn btn-danger mx-3'>
                Delete Author
            </button></td>
                </tr>
            )}         
            </tbody>
            </table>
        </div>
    )
}
export default AuthorList;