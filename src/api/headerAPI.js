import api from '.';

export default {
    find: () =>  api.get('/headers').then((res) => res.data),
    filter: (use_for) => api.get(`/headers?filters[use_for][$eq]=${use_for}`).then((res) => res.data),
}