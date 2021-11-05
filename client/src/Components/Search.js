import FormField from "./FormField"
import Sources from "./Sources"
import SearchResult from "./SearchResult"

const Search = ({ setSearchShown, searchQuery, setSearchQuery, listSizes, fonts }) => {

    const temp = fonts.data
    console.log('logging type: ', temp)

    const handleClick = (e) => {
        console.log(e.target.className)
        if (e.target.className !== 'modal') {
            console.log('logging type: ', temp)
            return
        } else {
            setSearchShown(false)
        }
    }

    const onChange = (e) => {
        console.log(e.target.value)
        setSearchQuery(e.target.value)
    }

    const style = {
        backgroundColor: '#f5f5f5'
    }

    

    return (
        <div className='modal' onClick={handleClick}>
            <div className='modal-content'>
                <div className='search-container'>
                    <p className='step-name'>/ FIND TYPEFACE</p>
                    <div className='search-content'>
                        <div className='search-inputs-container'>
                            <FormField label='SEARCH' placeholder='eg. Poppins' value={searchQuery} onChange={onChange} style={style}/>
                        </div>
                        <div className='search-results-container'>
                            {
                                temp.slice(0,24).map( elem => <div className='search-result'>{elem}</div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search