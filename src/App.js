import './App.css';
import Bootstrap from './components/Bootstrap';

import SubComponent from './components/SubComponent';
import Axios from './components/Axios';

function App(){
    return ( 
    // <div className='appcontainer'>
    //     <h1> hi this is first components.....</h1>
    //     <p> hi this is first paragraph tag</p>
       
    // </div>
    <div> 
     <SubComponent/>
     <Axios/>
        {/* <Bootstrap /> */}
     </div>
    );
    // this div using for multiple data send to return .. bcz return can not give return more than one data  if we want return multiple data then all value or data wrapping in the <div> all require return values   </div> .........
}
export default App;
