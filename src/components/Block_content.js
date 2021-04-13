import React from 'react'
import photo from "./teacher.png"
import "./BlockContent.css"

export default function Block_content() {
    return (
        <div className="wpapper_block_content">
            <div className="photo_teacher">
                <img src={photo}/>
            </div>
            
        </div>
    )
}
