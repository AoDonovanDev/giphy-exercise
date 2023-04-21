console.log("Let's get this party started!");
$('button').on('click', function(e){
    e.preventDefault();
})
document.querySelector('#addGif').addEventListener('click', getGif);
document.querySelector('#rmvAll').addEventListener('click', removeAll);
async function getGif(){
    const searchTerm = document.querySelector('#searchBox').value;
    document.querySelector('#searchBox').value = '';
    const apiTest = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    const newGif = new Image();
    newGif.setAttribute('src', apiTest.data.data[0].images.original.url);
    document.querySelector('.gifArea').append(newGif);
    console.log(apiTest);
}
function removeAll(){
    $('.gifArea').empty();
}