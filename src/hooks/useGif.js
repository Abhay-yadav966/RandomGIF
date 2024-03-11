import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function useGif(tag) {

  //Showing loading element while gif is loading
  const [ showLoading , setShowLoading ] = useState(false);
  
  // state variable for gifdata
  const [ gif, setGif ] = useState("");

  // calling api key from env file
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

  // api for random
  const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

  // api url for tag means in which we are passing input
  const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;


  // api call using axios

    async function fatchData(){
    try{
      setShowLoading(true);
      const output = await axios.get( tag ? tagMemeUrl : randomMemeUrl );
      const imageSource = output.data.data.images.downsized_large.url;
      setGif(imageSource);
      setShowLoading(false);
    }
    catch(err){
      alert(err);
    }
  }

  useEffect( () => {
    fatchData();
  },[]);
  
  return{ gif, showLoading, fatchData };

}

export default useGif;