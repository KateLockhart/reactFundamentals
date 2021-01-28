//call on and utilize react
import React, {useState} from 'react';
//call on and utilize NYT results code
import NytResults from './NytResults'

//creates variable name for URL
const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
//key variable for API acess
const key = 'Xx4vzp7JvsAyNYui4CPCLsqWM9qBRhM7';

//NYT App variable creates and fat arrow function created 
//14-18 use and state results with string, integer, or array
const NytApp = () => {
    const [ search, setSearch ] = useState('');
    const [ startDate, setStartDate ] = useState('');
    const [ endDate, setEndDate ] = useState('');
    const [ pageNumber, setPageNumber ] = useState(0);
    const [ results, setResults ] = useState([]);

//create function to call on API and get results    
    const fetchResults = () => {
//URL created to add information to pull from API
        let url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${search}`;
//uses ternary for if else to change start date        
        url = startDate ? url + `&begin_date=${startDate}` : url;
        url = endDate ? url + `&end_date=${endDate}` : url;
//fetch created, which is a promise from the url var, .then is the promise resolver jsonifying data
        fetch(url)
          .then(res => res.json())
//sets results so they can be displayed in doc
          .then(data => setResults(data.response.docs))
//will show error if no info returns
          .catch(err => console.log(err));
      };
//function fat arrow with a parameter of event that only triggers when submit button is hit as event
    const handleSubmit = (event) => {
        //prevent default prevents data from being deleted
        event.preventDefault()
        setPageNumber(0);
        fetchResults();
    }
//function based around event of chaning page number
    const changePageNumber = (event, direction) => {
        event.preventDefault()
        //if function dictates down arrow if, page cannot be less than zero, take surrent number minus one and then fetch results
        if (direction === 'down') {
            if (pageNumber > 0) {
            setPageNumber(pageNumber - 1);
            fetchResults();
            }
        }
        //oppisite of above
        if (direction === 'up') {
            setPageNumber(pageNumber + 1);
            fetchResults();
        }
    };
//return displays page structure
    return(
        //main div that holds all info, must be singular div
        <div className="main">
            {/* main inner parent div for nesting */}
            <div className="mainDiv">
                {/* whole form created, waits for button event */}
                <form onSubmit={(e) => handleSubmit(e)}>
                    {/* spans text */}
                    <span>Enter a single search term (required) : </span>
                    {/* input box for keyword search */}
                    <input type="text" name="search" onChange={(e) => setSearch(e.target.value)} required />
                    <br />
                    <span>Enter a start date: </span>
                    <input type="date" name="startDate" pattern="[0-9]{8}" onChange={(e) => setStartDate(e.target.value)} />
                    <br />
                    <span>Enter an end date: </span>
                    <input type="date" name="endDate" pattern="[0-9]{8}" onChange={(e) => setEndDate(e.target.value)} />
                    <br />
                    {/* button to be submit event */}
                    <button className="submit">Submit search</button>
                </form>
                {
                // turnary: looking into results, will display results, and allow for change page to be implimented
                results.length > 0 ? <NytResults results={results} changePage={changePageNumber} /> : null
                }
            </div>
        </div>
    );
};
//exporting app to pull on app.js
export default NytApp;