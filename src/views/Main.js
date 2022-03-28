import React, { useState , useEffect} from "react";
import axios from "axios";
import AuthorForm from "../views/NewAuthor";
import AuthorList from "../components/AuthorList";
import {Switch, Route} from 'react-router-dom'
import Update from "./Update";

const Main = (props) => {
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);


useEffect (() =>{
    axios.get('http://localhost:8000/api/Authors/findAll')
        .then(res =>{
            setAuthor(res.data);
            setLoaded(true);
        })
        .catch(err => console.error(err));
},[author]);

return (
    <div>
        <Switch>
            <Route exact path="/authors">
                <AuthorForm setAuthor = {setAuthor}/>
                <hr/>
                <AuthorList author={author}/>
            </Route>
            <Route exact path="/authors/:id">
                <Update/>
            </Route>
        </Switch>
    </div>
    );
}
export default Main;
