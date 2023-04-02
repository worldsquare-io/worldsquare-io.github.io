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
    return navigator.geolocation.getCurrentPosition(function(pos) {

        fetch(getApiUrl('/items/' + parentId + '/replies'), {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify({
                timestamp: String(Date.now() / 1000),
                location: [pos.coords.latitude, pos.coords.longitude],
                message: text,
                variant: "remote",
            }),
        });
        // .then(response => response.json())
        // .then(response => {
        //     console.log("Posted comment:", response);
        // })
        // .error((err) => {
        //     console.error("Failed to post comment:", err);
        // });

    }, (err) => {
        console.error("Failed to get geolocation data:", err)
    });
};

export { fetchParentItems, fetchChildItems, postComment };
