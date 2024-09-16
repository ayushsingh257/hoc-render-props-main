import './App.css';
import Props from './components/Props';
import Image from './components/image';
import Post from './components/post';

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        {/*--------------Using props here-----------  */}
        {/* <Props message={"LikePost"}/>
        <Props message={"LikeImage"}/> */}
        {/*------------- Using hoc here-------------- */}
        <Image/>
        <Post/>
        
      </div>
    </div>
  );
  
}

export default App;
