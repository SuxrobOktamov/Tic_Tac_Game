import React from 'react';
import './App.css';
import Lists from './Lists/Lists';
import PlayerOne from './PlayerOne/PlayerOne';
import PlayerTwo from './PlayerTwo/PlayerTwo';
import Draw from './Draw/Draw';
function App() {
    function reset(e) {
        Array.from(e.target.parentNode.parentNode.parentNode.children[0].children[0].children).forEach((element) => {
            element.classList.remove('delete', 'win', 'solid');
        });
        e.target.parentNode.parentNode.classList.remove('gameWin');
    }
    return(
        <div className='container'>
            <Lists/>
            <p>Note: use the Full Page view for the best expreince.</p>
            <PlayerOne restart={(e)=>{reset(e)}}/>
            <PlayerTwo restart={(e)=>{reset(e)}}/>
            <Draw restart={(e)=>{reset(e)}}/>
        </div>
    )
}

export default App;