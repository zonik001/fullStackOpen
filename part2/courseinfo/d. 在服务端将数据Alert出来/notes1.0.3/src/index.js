import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


// axios.get('http://localhost:3001/notes').then(res => {
//   const notes = res.data
//   ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes}/>)
//   console.log(res);
//   console.log(notes);
// })

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

// const promise2 = axios.get('http://localhost:3001/foobar')
// console.log(promise2)




