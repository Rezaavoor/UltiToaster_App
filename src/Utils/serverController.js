require('dotenv').config()

const BASE_URL = process.env.REACT_APP_SERVER_URL

export const toast = (time) => {
  try {
    fetch(`${BASE_URL}/api/motor/1/100/2`) // drag down
    setTimeout(() => {
      fetch(`${BASE_URL}/api/on/${time}`) // turn it on
      setTimeout(() => {
        fetch(`${BASE_URL}/api/motor/1/-60/0.4`) // drag up
      }, time * 1000)
    }, 2000)
  }

  catch (e) { console.log(e) }
}