
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';

const reactElement = { // does not work as  react does not identify this
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  child: "Click me to visit google",
};

function MyApp(){
    return(
        <div>
            <h1> custom rect app</h1>
        </div>
    )
}

const AnotherElement =(
    <a href="http://google.com" target='_blank'>Visot google</a>
)

const areactElement = React.createElement(       // react identify them as object hence they works
    'a',
    {href: 'https://google.com', target: "_blank"},
    'click to visit goggle'
)
createRoot(document.getElementById('root')).render(

    <App />

)
