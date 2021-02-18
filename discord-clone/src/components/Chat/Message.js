import React from 'react'
import { Avatar } from '@material-ui/core'

import './Message.css' 

function Message({ timestamp, message, user }) {
    return (
        <div className="message">
            <Avatar src={user.photo} />
            <div className="message__info">
                <h4>
                    {user.displayName}
                    <span class="message__timestamp">
                        {new Date(parseInt(timestamp)).toDateString()}    
                    </span>    
                </h4>

                <p>{message}</p>
            </div>

        </div>
    )
}


export default Message
