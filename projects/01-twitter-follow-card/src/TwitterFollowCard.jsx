import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export function TwitterFollowCard ({ name = 'username', userName = 'userName' }) {
    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
    ? 'twitter-follow-card-button is-following' 
    : 'twitter-follow-card-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return( 
        <article className="twitter-follow-card">
            <header className="twitter-follow-card-header">
                <img 
                className="twitter-follow-card-avatar"
                src={`https://unavatar.io/twitter/${userName}`} 
                alt="Avatar de usuario" />
                <div className="twitter-follow-card-info">
                    <strong className="twitter-follow-card-infoUsername">{name}</strong>
                    <span className="twitter-follow-card-infoUser">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='twitter-follow-card--Following'>{text}</span>
                    <span className='twitter-follow-card--stopFollowing'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}