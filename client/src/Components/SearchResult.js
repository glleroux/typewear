import { useEffect } from 'react';
import WebFont from 'webfontloader';

const SearchResult = ({ font, id, isActive, handleClick }) => {

    useEffect(() => {
        WebFont.load({
          google: {
            families: [font]
          }
        });
       }, []);

    return (
        <div id={id} className={isActive ? 'search-result-active' : 'search-result'} onClick={handleClick}>
            <p id={`f-${font}`} className={'font-family-small'} style={{fontFamily: font, fontWeight: 'bold'}}>{font.toLowerCase()}</p>
            
        </div>
    )

}

export default SearchResult