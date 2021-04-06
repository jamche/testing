// TEST APIS
const fetch = require('node-fetch');

const getPeoplePromise = (fetch) => {
    return fetch('https://swapi.dev/api/people').then(res => res.json()).then(data => {
        return {
                count: data.count,
                results: data.results
            }
        });
};

const getPeople = async (fetch) => {
    const getRequests = await fetch('https://swapi.dev/api/people')
    const data = await getRequests.json();
    return {
        count: data.count,
        results: data.results
    }
};
getPeople(fetch);
getPeoplePromise(fetch)

module.exports = {
    getPeople,
    getPeoplePromise
}