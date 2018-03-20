
export default class LikeServer {
  static async getProduct () {
    try {
      var response = await fetch('product', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      let responJson = await response.json()
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

  static async findAccount (email) {
    try {
      var response = await fetch('findAccount', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email
        })
      })
      let responJson = await response.json()
      console.log(responJson)
      return responJson.data.isExist
    } catch (error) {
      return undefined
    }
  }

  static async checkLoginUser (email, password) {
    try {
      var response = await fetch('loginUser', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      })
      let responJson = await response.json()
      console.log(responJson)
      return responJson.data
    } catch (error) {
      return undefined
    }
  }

  static async registerUser (name, password, email, phone, province, address) {
    try {
      var response = await fetch('account', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name, password, email, phone, province, ward: 'Tây thạnh', district: 'quận 1', address
        })
      })
      let responJson = await response.json()
      return responJson.data.data
    } catch (error) {
      return undefined
    }
  }
}
