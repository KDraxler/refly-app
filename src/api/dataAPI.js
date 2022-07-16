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
        find: () =>  api.get('/favorite?populate[projects][populate]=*').then((res) => res.data),
    })
}

export const explorationAPI = () => {
    return({
        find: () =>  api.get('/exploration?populate[explores][populate]=*').then((res) => res.data),
    })
}

export const serviceAPI = () => {
    return({
        find: () =>  api.get('/service?populate[serves][populate]=*').then((res) => res.data),
    })
}

export const contactUsAPI = () => {
    return({
        find: () =>  api.get('/contact-us').then((res) => res.data),
    })
}

export const exploreAPI = () => {
    return({
        find: () =>  api.get('/explores?populate=*').then((res) => res.data),
    })
}

export const moreAPI = () => {
    return({
        find: () =>  api.get('/s-more?populate[icon][populate]=*&populate[links][populate]=*').then((res) => res.data),
    })
}

export const footerAPI = () => {
    return({
        find: () =>  api.get('/footer?populate=*').then((res) => res.data),
    })
}