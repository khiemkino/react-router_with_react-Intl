import key from '../lib/constants'

export function setInternet (internet) {
  return {
    type: key.SET_INTERNET,
    payload: internet
  }
}

export function setUser (user) {
  return {
    type: key.SET_USER,
    payload: user
  }
}

export function setCart (cart) {
  return {
    type: key.SET_CART,
    payload: cart
  }
}

export function setLocale(locale) {
  return {
    type: key.SET_LOCALE,
    payload: locale
  }
}
