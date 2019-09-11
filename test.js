//Pemanggilan Library axios
const axios = require('axios');

//URL api
const url = 'https://rickandmortyapi.com/api/character';

//Action GET METHOOD
axios.get(url).then(res => {
    //Jika success akan tertampil disini
    console.log(res);
}).catch(err => {
   //Jika error akan tertampil disini
    console.log(err);
})