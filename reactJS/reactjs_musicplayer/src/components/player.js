import react, { useState } from 'react';

function Player() {
    let [index, changeIndex] = useState(0)
    let music = [
        {
            name: 'a11',
            lyrics: 'a12',
            author: 'a12'
        },
        {
            name: 'a21',
            lyrics: 'a22',
            author: 'a23'
        }
    ];

    function nextButton() {
        changeIndex(
            (index < music.length - 1) ? index + 1 : 0
        )
    }
    return (
        <div className='container'>
            <ul className="list-group">
                <li className="list-group-item">Name: {music[index].name}</li>
                <li className="list-group-item">Lyric: {music[index].lyrics}</li>
                <li className="list-group-item">Author: {music[index].author}</li>
            </ul>
            <button type="button" className="btn btn-primary" onClick={nextButton}>
                <i class="fa fa-step-forward" aria-hidden="true"></i>
            </button>
        </div>
    )
}

export default Player;