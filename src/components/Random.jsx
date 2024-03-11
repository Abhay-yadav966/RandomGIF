import axios from "axios";
import { useEffect, useState } from "react"
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Random() {

  //Showing loading element while gif is loading

  // const [ showLoading , setShowLoading ] = useState(false);
  
  
  // state variable for gifdata
  // const [ gif, setGif ] = useState("");

  // calling api key from env file
  // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

  // api url 
  // const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


  // api call using axios

  // async function fatchData(){
  //   try{
  //     setShowLoading(true);
  //     const output = await axios.get(url);
  //     const imageSource = output.data.data.images.downsized_large.url;
  //     setGif(imageSource);
  //     setShowLoading(false);
  //   }
  //   catch(err){
  //     alert(err);
  //   }
  // }

  // useEffect( () => {
  //   fatchData();
  // },[]);


  // calling custom hook and using data

  const {gif, showLoading, fatchData} = useGif();
  
  function clickHandler(){
    fatchData();
  }


                                      

  

  return (
    <div className=" bg-green-500  w-1/2 mx-auto mt-8 rounded-lg border border-black flex flex-col items-center gap-y-5 " >
      <h1 className="text-2xl font-bold underline uppercase mt-[15px] " >A Random Gif</h1>
      { showLoading ? <Spinner/> :<img src={gif}  width="450" />}
      <button onClick={clickHandler} className=" w-10/12 mb-[20px] bg-[#e6eee8] text-lg py-2 rounded-lg uppercase font-bold " >Generate </button>
    </div>
  );
}
