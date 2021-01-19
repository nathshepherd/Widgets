import React, {useEffect, useState} from 'react';
import axios from 'axios';

// Search bar that lists wikipedia results
const Search = () => {
    // Hooks
    const [term, setTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    // DebounceTerm works as a filter so that the query isn't loaded twice on start up
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
    }, 500); // 500ms delay (to allow the user to enter input)

        return () => {
            clearTimeout(timerId);
        };
    }, [term]);

    // Runs the api request
    useEffect(() => {
        if(term) {
            const search = async () => {
                const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                    params: {
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: debouncedTerm,
                    },
                });

                setResults(data.query.search);
            };
            search();
        }
    }, [debouncedTerm]);

    // Displays Wiki api requested information in appropriate format
    // NOTE: dangerouslySetInnerHTML can leave a security flaw so make sure you trust the source!
    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a 
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet}}/>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        className="input" 
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
};

export default Search;
