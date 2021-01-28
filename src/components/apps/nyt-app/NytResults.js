//call on and utilize react
import React from 'react';

//creating results function and giving it props
const NytResults = (props) => {
    //return from prop function
    return (
    <div>
      {/* mapping through results array, returns from result which allows us to create another div */}
        {props.results.map(result => {
        return (
          //id from API results
          <div key={result._id}>
            {/* imports headline from API data */}
            <h2>{result.headline.main}</h2>
            {/* ternary; if multimedia is greater than one, then img will be displayed else it will just show sting info of article */}
            {result.multimedia.length > 1 ? <img alt="article" src={`http://www.nytimes.com/${result.multimedia[1].url}`} /> : ''}
            {/* diplaying intro/ then keywords if they exist(turnary) displays as string*/}
            <p>
              {result.snippet}
              <br />
              {result.keywords.length > 0 ? ' Keywords: ' : ''}
            </p>
            {/* maps keywords and lists to display them */}
            <ul>
              {result.keywords.map(keyword => <li key={keyword.value}>{keyword.value}</li>)}
            </ul>
            {/* a tag pulls url for atricle and assigns path to button */}
            <a href={result.web_url}><button>Read It</button></a>
          </div>
        )
      })}
      {/* div holds buttons */}
         <div>
        <button onClick={(e) => props.changePage(e, 'down')}>Previous 10</button>
        <button onClick={(e) => props.changePage(e, 'up')}>Next 10</button>
        </div>     
    </div>
  );
};    
//exports to Nyt App
export default NytResults;


  
    


