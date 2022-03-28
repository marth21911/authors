import React, {useEffect, useState} from 'react'
import axios from 'axios'
export default props =>{
    // const {initialAuthorName, onSubmitProp} = props;
    const [name, setAuthorName] = useState ("");
    const [error, setError] = useState ({});
    const {setAuthor} = props
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors/create', {
            name
        })
            .then(res =>{console.log(res)
            })
            .catch(err => {console.log(err.response.data.err.errors)
                setError(err.response.data.err.errors.name)
            })
        }
    return(
        <form onSubmit= {onSubmitHandler}>
            <div className="form-group"> 
                <label for="author">Author Name</label>
                    <input  onChange={(e) => { setAuthorName(e.target.value)}} name= "Author" type="text" className="form-control" value={name} placeholder="Author Name"/>
                    {error && error.message}
            </div>
                <button type="submit" className="btn btn-primary">Submit</button>

        </form>
    )
}