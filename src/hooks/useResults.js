import { useState, useEffect }  from 'react';
import DataSource from '../api/DataSource';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchItem) => {
        try {
            const response = await DataSource.get(`/everything`, {
                params: {
                    q: searchItem,
                    pageSize: 30
                }
            })
            setResults(response.data.articles)
        } catch (err) {
            setErrorMessage('Something went wrong')
            console.log(err)
        }
    };


    //Loads the content when navigated to the content page
    useEffect(() => {
        searchApi('top+news')
    }, []);

    return [results, errorMessage, searchApi];
};