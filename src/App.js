import logo from './logo.svg';
import './App.css';
import Imagess from './images';
import {PlayCircleIcon} from "@heroicons/react/24/outline"

function App() {
  return (
   <>
   <div className='bg'>
   <h2>Team <span className='i'>I</span><span className='n'>N</span><span className='d'>D</span>ia</h2>
   {/* <img src={sv}></img> */}
   <div className='para'>
   <p className='loss'>As Team India loses the final against austrailia,
    Let us support our team for their full effort
   performance and also a whole damn good performance 
   during the whole tournament!
   Thank You Team India.
   </p>
   <p className='narr'>ICC World Cup<br></br>2023</p>
   </div>
   {/* <button className='play'><PlayCircleIcon  width={"40px"} color='white'>Play</PlayCircleIcon></button>
   <p className='story'>Start Story</p> */}
   </div>
   <Imagess></Imagess>
   </>
  );
}

export default App;
