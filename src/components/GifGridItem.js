import React from 'react'

export const GifGridItem = ( {title,url}) => {

    return (
        <div className="animate__animated animate__bounce">
            <p>{title}</p>
            <img src={url} alt={title} />
        </div>
    )
}
