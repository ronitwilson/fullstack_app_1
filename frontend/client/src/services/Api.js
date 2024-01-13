import axios from 'axios'

export default () => {
  // eslint-disable-next-line standard/object-curly-even-spacing
  return axios.create({ baseURL: `http://localhost:3000`})
}
