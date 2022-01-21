import FormField from "./FormField"
import Sources from "./Sources"
import SearchResult from "./SearchResult"
import Button from './Button'

const Search = ({ setSearchShown, searchQuery, setSearchQuery, sourceLengths, selectedSource, handleChangeSource, selectedResult, setSelectedResult, setDisplayedFont }) => {

    const handleSearchResultClick = (e) => {
        console.log(e.target.id)
        const fontName = e.target.id.substring(2)
        setSelectedResult(fontName)
        console.log('selected: ', selectedResult)
    }
    
    const handleClick = (e) => {
        console.log(e.target.className)
        if (e.target.className !== 'modal') {
            return
        } else {
            setSelectedResult(null)
            setSearchShown(false)
        }
    }

    const onChange = (e) => {
        console.log(e.target.value)
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
                            <FormField label='SEARCH' placeholder='eg. Poppins' value={searchQuery} onChange={onChange} style={style}/>
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
                                        />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {selectedResult ? <Button label='CONFIRM' role='' handler={() => handleSearchConfirmClick()}/> : <Button label='hidden' role=''/>}
        </div>
    )
}

export default Search