import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return <div className="w-screen h-screen overflow-x-hidden overflow-y-auto background " >
      <h1 className="bg-white text-center w-11/12 mx-auto mt-[40px] rounded-lg text-4xl font-bold px-10 py-2" >RANDOM GIFS</h1>
      <div>
        <Random/>
        <Tag/>
      </div>
  </div>;
}
