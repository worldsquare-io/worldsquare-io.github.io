const getPosition = (options) => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};

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

const postComment = (parentId, text) => {
    return getPosition()
        .then((pos) => {
            return fetch(getApiUrl('/items/' + parentId + '/replies'), {
                headers: { "Content-Type": "application/json" },
                method: "POST",
                body: JSON.stringify({
                    timestamp: String(Date.now() / 1000),
                    location: [pos.coords.latitude, pos.coords.longitude],
                    message: text,
                    variant: "remote",
                }),
            });
        });
};

const createPost = (text, location, variant) => {
    return fetch(getApiUrl('/items'), {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({
            timestamp: String(Date.now() / 1000),
            location: location,
            message: text,
            variant: variant,
        })
    });
};

export { fetchParentItems, fetchChildItems, postComment, getPosition, createPost };
