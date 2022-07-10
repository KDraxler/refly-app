import api from '.';

export default {
    find: () =>  api.get('/about?populate=*').then((res) => res.data),
}