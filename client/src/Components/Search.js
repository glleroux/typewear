import FormField from "./FormField"
import Sources from "./Sources"
import SearchResult from "./SearchResult"
import Button from './Button'
import CloseIcon from '@mui/icons-material/Close';

const Search = ({ 
    setSearchShown, 
    searchQuery, 
    setSearchQuery, 
    sourceLengths, 
    selectedSource, 
    handleChangeSource, 
    selectedResult, 
    setSelectedResult, 
    setDisplayedFont, 
    trendingFonts }) => {

    const handleSearchResultClick = (e) => {
        const fontName = e.target.id.substring(2)
        setSelectedResult(fontName)
    }
    
    const handleClick = (e) => {
        if (e.target.className === 'modal' || e.target.id === 'close-icon') {
            setSelectedResult(null)
            setSearchShown(false)
        } else {
            return
        }
    }

    const onChange = (e) => {
        setSearchQuery(e.target.value)
    }

    const handleSearchConfirmClick = () => {
        setDisplayedFont(selectedResult)
        setSearchShown(false)
        setSelectedResult(null)
    }

    const style = {
        backgroundColor: '#f5f5f5'
    }

    let fontsToShow = selectedSource.data.filter(font => font.toLowerCase().includes(searchQuery))

    return (
        <div className='modal' onClick={handleClick}>
            <div className='modal-content'>
                <div className='search-container'>
                    <p className='step-name'>/ FIND TYPEFACE</p>
                    <div className='search-content'>
                        <div className='search-inputs-container'>
                            <FormField id='search-form-field' label='SEARCH' placeholder={`eg. ${selectedSource.data[Math.floor(Math.random()*selectedSource.data.length)]}`} value={searchQuery} onChange={onChange} style={style}/>
                            <Sources label='SOURCE' selectedSource={selectedSource} handleChangeSource={handleChangeSource} sourceLengths={sourceLengths}/>
                        </div>
                        <div className='search-results-container'>
                            <div className='search-results-grid'>
                                {
                                    fontsToShow.map(font => <SearchResult 
                                        id={`r-${font}`} 
                                        key={font} 
                                        font={font} 
                                        isActive={(selectedResult === font) ? true : false}
                                        handleClick={handleSearchResultClick}
                                        trendingFonts={trendingFonts}
                                        />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {selectedResult ? <Button label='CONFIRM' role='' handler={() => handleSearchConfirmClick()}/> : <Button label='hidden' role=''/>}
            <CloseIcon id='close-icon'/>
        </div>
    )
}

export default Search