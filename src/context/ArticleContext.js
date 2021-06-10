import createDataContext from './createDataContext';
import newsApi from '../api/News';
import { navigate } from '../navigationRef';

const articleReducer = (state, action) => {
    switch (action.type) {
        case 'add_article_story':
            return { 
                ...state, 
                url: payload.url, 
                title: payload.title,
                article: payload.addedInfo
            };
        case 'fetch_article':
            return action.payload;
        default:
            return state;
    }
};

const addArticle = (dispatch) => async ( url, title, imageUrl, addedInfo ) => {
    await newsApi.post('/news', { url, title, imageUrl, addedInfo });
    navigate('ArticleList');
};

const fetchArticle = (dispatch) => async () => {
    const response = await newsApi.get('/news');
    dispatch({ type: 'fetch_article', payload: response.data });
};

const editArticle = (dispatch) => () => {};

const removeArticle = (dispatch) => () => {};


export const { Context, Provider } = createDataContext(
    articleReducer,
    { addArticle, fetchArticle, editArticle, removeArticle },
    []
);