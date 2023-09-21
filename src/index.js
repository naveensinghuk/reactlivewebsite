import React from 'react';
import ReactDom from 'react-dom/client';
import './Index.css';
import App from './App';
const root = ReactDom.createRoot(document.getElementById('root'));
root.render( 
            <div>   
                <App />
                <h1 className='heading'>hi</h1>
               
               
            </div>
    );
// ReactDom.render(<App/>,<h2>hi this is heading</h2>,
// document.getElementById('root'));
// Component name should be started with capital later;








 //  this div tag using for multiple data send in render () arguments bcz can not send more than one data through render arguments