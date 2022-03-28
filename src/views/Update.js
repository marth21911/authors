import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom';

const Update = (props) => {
    const history = useHistory();
    const {id} = useParams ();
    const [name, setName] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setName(res.data.name);
            })
    }, [name]);
    const [error, setError] = useState ({});
    const updateAuthor = e => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/authors/' + id, {
            name
        })
            .then(res =>console.log(res))
            .catch(err => {console.log(err.response.data)
                setError(err.response.data.err.message)
            })
        history.push("/authors");
        // window.location.reload()
    }
    return(
        
        <form onSubmit= {updateAuthor}>
            <div className="form-group">
                <label for="author">Author Name</label>
                    <input  onChange={(e) => { setName(e.target.value)}} name= "Author" type="text" className="form-control" value={name} placeholder={props.name}/>
            </div>
                <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
export default Update