import { faBasketball, faMusic, faGamepad, faFlag } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'

import { ThemeContext } from '../../ThemeContext'
import Item from './Item'

function Favorite(){

    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0

    const value = useContext(ThemeContext)

    const sport = {
        color: 'rgb(218, 105, 105)',
        title: 'スポーツ',
        icon: faBasketball,
        content: ['サッカー', '水泳', 'マラソン']
    }

    const music = {
        color: '#f5c868',
        title: '音楽',
        icon: faMusic,
        content: ['Intention - Justin Bieber', '7 rings - Ariana Grande', 'Perfect - Ed Sheeran']
    }

    const game = {
        color: '#8abc43',
        title: 'ゲーム',
        icon: faGamepad,
        content: ['Valorant', 'League of legends', 'Naraka bladepoint']
    }

    const nation = {
        color: '#339dcc',
        title: '国',
        icon: faFlag,
        content: ['日本', 'アメリカ', '韓国']
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