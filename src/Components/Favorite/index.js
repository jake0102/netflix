import { faBasketball, faMusic, faGamepad, faFlag } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'

import { ThemeContext } from '../../ThemeContext'
import Item from './Item'

function Favorite(){

    const value = useContext(ThemeContext)

    const sport = {
        color: 'rgb(218, 105, 105)',
        title: 'Sport',
        icon: faBasketball,
        content: ['Succer', 'Swim', 'Marathon']
    }

    const music = {
        color: '#f5c868',
        title: 'Music',
        icon: faMusic,
        content: ['Intention - Justin Bieber', '7 rings - Ariana Grande', 'Perfect - Ed Sheeran']
    }

    const game = {
        color: '#8abc43',
        title: 'Game',
        icon: faGamepad,
        content: ['Valorant', 'League of legends', 'Naraka bladepoint']
    }

    const nation = {
        color: '#339dcc',
        title: 'Nation',
        icon: faFlag,
        content: ['Japan', 'United of states', 'Korea']
    }

    return (
        <div className="favorite">
            <div className="favorite-title mb-3">
                <span>MY FAVORITE</span>
            </div>

            <Item data={sport}/>

            <Item data={music} />

            <Item data={game} />

            <Item data={nation} />

            <div className={value.headerTheme} style={{height: '10px'}}></div>
        </div>
    )
}

export default Favorite