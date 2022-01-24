import { getName } from '../utils/font_helper'

const SearchResult = ({ font, id, isActive, handleClick, trendingFonts }) => {

    return (
        <div id={id} className={isActive ? 'search-result-active' : 'search-result'} onClick={handleClick}>
            <p id={`f-${font}`} className={`font-family-small ${getName(font)} w600`}>{font.toLowerCase()}</p>
            {/* {trendingFonts.includes(font) && <p className='trending-emoji'>🔥</p>} */}
        </div>
    )

}

export default SearchResult