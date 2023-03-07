import React from 'react';

function PhotoImage(props) {
    return (
        <div>
            <img src={"https://picsum.photos/200/160?random=" + props.randomimage} alt="" />
        </div>
    );
}

export default PhotoImage;
