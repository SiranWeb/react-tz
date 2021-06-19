export const setNews = news => ({type: 'news/set', payload: news});
export const setUser = user => ({type: 'user/set', payload: user});
export const resetUser = () => ({type: 'user/reset'});