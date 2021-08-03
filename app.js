document.querySelector('#submitButton').addEventListener('click', function (e) {
    e.preventDefault();
    const searchTerm = document.querySelector('#searchInput').value
    test(searchTerm);
    document.querySelector('#searchInput').value = ''
})

document.querySelector('#clearButton').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#gifDiv').innerHTML = ''
})

async function test(searchTerm) {
    const response = await axios.get('http://api.giphy.com/v1/gifs/search',
        {
            params: {
                q: searchTerm,
                api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'
            }
        });
    newGif = document.createElement('img');
    const randomIndex = Math.floor(Math.random() * 50);
    newGif.setAttribute('src', response.data.data[randomIndex].images.original.url);
    document.querySelector('#gifDiv').append(newGif);
}