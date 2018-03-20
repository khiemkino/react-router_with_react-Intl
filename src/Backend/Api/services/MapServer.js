
import Setting from '../../settings'
export default class LikeServer {
  static async getCity () {
    try {
      var response = await fetch(Setting.server.doanhnghiep.url + 'city', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      let responJson = await response.json()
      console.log(responJson)
      return responJson.data
    } catch (error) {
      return undefined
    }
  }

  static async findProduct (id) {
    try {
      var response = await fetch('findProduct', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id
        })
      })
      let responJson = await response.json()
      return responJson.data.data
    } catch (error) {
      return undefined
    }
  }
}
