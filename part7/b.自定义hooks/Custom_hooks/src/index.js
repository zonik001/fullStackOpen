import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './Counter';
import App from './form'; //好像只能有一个大写文件,babel会自动给第二个开始的文件编译为小写,导致这里报错.(所以我直接改成小写了)

ReactDOM.createRoot(document.getElementById('root')).render(<App />)



