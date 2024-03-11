import React from "react";

const Message = ({ align, message, textAlign, datetime }) => {

    const date = new Date(datetime);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

    const formattedTime = `${formattedHours}:${formattedMinutes} ${amOrPm}`;

    return (
        <div className={`flex ${align}`}>
            <div className={`${message} ${textAlign}`  }>
                {message}
                <br />
                <p className="date text-gray-500 text-xs">{ formattedTime }</p>
            </div>
        </div>
    );
};

export default Message;
