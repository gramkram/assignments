const axios = require("axios");


////////////to use axios on the front-end vs with node ss
////////////<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

///////////GET REQUEST

// axios.get('https://swapi.co/api/people/1').then(response => {
//     console.log(response.data);
// }).catch(error => {
//     console.log(error)
// });

//////////POST REQUEST

// axios.post('https://api.vschool.io/suzan/todo/', newTodo).then(response => {
//     console.log(response.data);
//   }).catch(error => {
//     console.log(error)
//   });

///////////PUT AND DELETE
///////////BOTH NEED THE ID

axios.put('https://api.vschool.io/suzan/todo/5d0d36055723f72a73236f26', editedTodo).then(response => {
    console.log(response.data);
  }).catch(error => {
    console.log(error)
  });

axios.delete('https://api.vschool.io/suzan/todo/5d0d36055723f72a73236f26').then(response => {
    console.log(response.data);
  }).catch(error => {
    console.log(error)
  });


