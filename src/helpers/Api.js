const getApiUrl = (path) => {
    return 'https://api.worldsquare.io' + path;
}

const fetchParentItems = () => {
    return fetch(getApiUrl('/items'))
        .then(response => response.json());
};

const fetchChildItems = (parentId) => {
    return fetch(getApiUrl('/items/' + parentId + '/replies'))
        .then(response => response.json());
};

export { fetchParentItems, fetchChildItems };
