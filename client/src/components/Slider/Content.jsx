import React from 'react'

function Content({ content, translate }) {
    return (
        <div className="slider-content" key={content.id} style={{ transform: `translateX(${translate + 'vw'})` }}>
            <div className="left">
                <img src={content.img} alt=""/>
            </div>
            <div className="right">
                <div className='title'>
                    <h2>{content.title}</h2>
                </div>
                <div className='info'>
                    <h3>{content.info}</h3>
                </div>
                <button type='button'>Shop Now &#10095;</button>
            </div>
        </div>
  )
}

export default Content
