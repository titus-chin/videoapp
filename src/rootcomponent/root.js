import React from 'react'; //imr
import ActivityRemote from '../component/activity';
import ContentApi from '../component/contentapi';
import Gallery from '../component/gallery';
import Youtube from '../component/youtube';
import Content from '../spa/content';
import Menu from '../spa/menu';


//ffc
function MyRoot() {
    return (
        <div>
            <div>
                <h1>I am JSX. I am not HTML.</h1>
                <h2>I look like HTML but my behavior will be mix of HTML and JS. So, I'm JSX.</h2>
            </div> 
            <Menu></Menu>
            <Content></Content>
            {/* <Gallery></Gallery>
            <ContentApi></ContentApi>
            <ActivityRemote></ActivityRemote>
            <Youtube></Youtube> */}
        </div> 
    );
}

//ffc
export default MyRoot;