import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

export default function GetNotifications() {
    return (
        <div className="Notifications">
            <button
                style={{position: "absolute", top: "15px", right: "15px", border: "none", background: "none", padding: "0", cursor: "pointer"}} 
                onClick={(e) => {
                    e.preventDefault();
                    console.log("Close button has been clicked");
                }}
                aria-label="Close">
                <img src={closeIcon} width="15" height="15"></img>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
            </ul>
        </div>
    );
}