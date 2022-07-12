import api from '.';

export const headerAPI = () => {
    return({
        find: () =>  api.get('/headers').then((res) => res.data),
        filter: (use_for) => api.get(`/headers?filters[use_for][$eq]=${use_for}`).then((res) => res.data),
    })
}

export const aboutAPI = () => {
    return({
        find: () =>  api.get('/about?populate=*').then((res) => res.data),
    })
}

export const favoriteAPI = () => {
    return({
        find: () =>  api.get('/favorite?populate=*').then((res) => res.data),
    })
}