import React from 'react'
import './styles.css'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Link } from 'react-router-dom';

function Grid({ coin, i }) {

    return (
        <Link to={`/coin/${coin.id}`}>
            <div className={`grid-container ${coin.price_change_percentage_24h < 0 && 'grid-container-red'}`}>
                <div className='info-flex'>
                    <img src={coin.image} alt='photos' className='coin-logo' />
                    <div className='name-col'>
                        <p className='coin-symbol'>{coin.symbol}</p>
                        <p className='coin-name'>{coin.name}</p>
                    </div>
                </div>

                {coin.price_change_percentage_24h > 0 ? (
                    <div className='chip-flex'>
                        <div className='chip-price'>
                            {coin.price_change_percentage_24h.toFixed(2)}%
                        </div>
                        <div className='chip-icon'><TrendingUpRoundedIcon /></div>
                    </div>
                ) : (
                    <div className='chip-flex'>
                        <div className='chip-price chip-red'>
                            {coin.price_change_percentage_24h.toFixed(2)}%
                        </div>
                        <div className='chip-icon chip-red'><TrendingDownRoundedIcon /></div>
                    </div>
                )}

                <div className='info-container'>
                    <h3 className='coin-price' style={{
                        color:
                            coin.price_change_percentage_24h < 0 ? 'var(--red)' : 'var(--green)',
                    }}>
                        Rs {coin.current_price.toLocaleString()}
                    </h3>
                    <p className='total_volume'>Total Volume: Rs{coin.total_volume.toLocaleString()}</p>
                    <p className='total_volume'>Market Cap: Rs{coin.market_cap.toLocaleString()}</p>
                </div>
            </div>
        </Link>
    );
}

export default Grid