import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContentApi from '../component/contentapi';
import Gallery from '../component/gallery';
import Youtube from '../component/youtube';
import YoutubeAPI from '../component/youtubeapi';

function Content() {
    return (
        <div>
            <Routes>
                <Route path="/gallery" element={<Gallery></Gallery>}></Route>
                <Route path="/contentapi" element={<ContentApi></ContentApi>}></Route>
                <Route path="/youtube" element={<Youtube></Youtube>}></Route>
                <Route path="/youtubeapi" element={<YoutubeAPI></YoutubeAPI>}></Route>
            </Routes>
        </div>
    );
}

export default Content;
