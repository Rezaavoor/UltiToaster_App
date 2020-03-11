require('dotenv').config()

const BASE_URL = process.env.REACT_APP_SERVER_URL

export const toast = (time) => {
  fetch(`${BASE_URL}/api/motor/1/10/${time}`).then(res => {
    console.log(res.statusText)
  })
    .catch(e => console.log(e))
}