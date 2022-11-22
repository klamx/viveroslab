// import axios from 'axios'

export const login = (data) => {
  // const options = {
  //   method: 'POST',
  //   url: 'https://integracion.onyxsoft.co/vivero/api/v1/login',
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  //   },
  //   data
  // }

  // axios.request(options).then(function (response) {
  //   console.log(response.data)
  // }).catch(function (error) {
  //   console.error(error)
  // })

  const options = {
    method: 'POST',
    body: data,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }
  }

  console.log(data)

  fetch('https://integracion.onyxsoft.co/vivero/api/v1/login', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err))
}
