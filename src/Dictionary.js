import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary () {

    let [keyword, setKeyword] = useState("dictionary"); 
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

function handleResponse(response) {
setResults(response.data[0]);
}

function handlePexelsResponse(response) {
setPhotos(response.data.photos);
}

function search() {
 //documentation https://dictionaryapi.dev

 let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
 axios.get(apiUrl).then(handleResponse);
 let pexelsApiKey = "563492ad6f917000010000012692151b1b064ce3aa94c040625a2cf1";
 let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
 let headers = {"Authorization" : `Bearer ${pexelsApiKey}`}
 axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
}

function handleSubmit(event) {
    event.preventDefault();
    search();
   
}

function handleKeywordChange(event) {
setKeyword(event.target.value);
}
function load() {
    setLoaded(true);
    search();
}


if (loaded) {
    return (
        <div className="Dictionary">
<section>
    <h1>What are you looking for? </h1>
<form className="form" onSubmit={handleSubmit}>
        <input type="search" onChange={handleKeywordChange} />
</form>
<div className="hint"> suggested words: brave, independence, freedom ...</div>
</section>
<Results results={results} />
<Photos photos={photos} />
        </div>
    );
} else {
    load();
    return "Loading...";
}
}