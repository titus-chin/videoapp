import React, { useEffect, useState } from 'react';
import axios from 'axios';

function YoutubeAPI() {

    let [allvideos, updateAllVideos] = useState([])

    // use useEffect hook for API call
    useEffect(() => {
        callYoutubeAPI()
    }, [])

    let callYoutubeAPI = () => {
        // use axios to call youtube API
        axios.get("https://fierce-gray-hippo.cyclic.app/get/all/songs")
            .then(response => {
                console.log(response.data)
                updateAllVideos(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    let renderAllVideos = () => {
        return allvideos.map((video) => {
            return (
                <div key={video._id} style={{
                    border: "2px solid red",
                    margin: "5px",
                    padding: "5px"
                }}>
                    <iframe width="320" height="240" src={"https://www.youtube.com/embed/" + video.videoid}
                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            )
        })
    }

    if (allvideos.length === 0) {
        return (
            <div>
                <h1>Get the list of youtube videos from API.</h1>
                <h2>Length of response: {allvideos.length}</h2>
                <h3>Loading....</h3>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Get the list of youtube videos from API.</h1>
                <h2>Length of response: {allvideos.length}</h2>
                <div style={{ display: "flex" }}>
                    {renderAllVideos()}
                </div>
            </div>
        );
    }
}

export default YoutubeAPI;
