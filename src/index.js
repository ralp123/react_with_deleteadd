import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Detail from './Detail'
import Table from './Table'
import './index.css'

ReactDOM.render(
<>
    <div class="container-fluid">
        <Detail />
    </div>
    <div class="container">
        <App />
    </div>
</>
,document.getElementById('root'))
