import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";


export default function Dictionary () {

    let [keyword, setKeyword] = useState(""); 

function handleResponse(response) {


}

function search(event) {
    event.preventDefault()

let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
axios.get(apiUrl).then(handleResponse);
}


function updateKeywordChange(event) {
setKeyword(event.target.value)
}

    return (
        <div className="Dictionary">
<form className="form" onSubmit={search}>
        <input type="search" onChange={updateKeywordChange} />
</form>
        </div>
    )
}