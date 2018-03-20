import createReducer from '../lib/reducerConfig'
import key from '../lib/constants'
import init from '../lib/initState'
import MessageVI from 'Assets/Lang/vi.json';
import MessageEN from 'Assets/Lang/en.json';


export const internetData = createReducer(init.internetInit, {
  [key.SET_INTERNET](state, action) {
    return action.payload
  }
})

export const userData = createReducer(init.userInit, {
  [key.SET_USER](state, action) {
    return action.payload
  }
})

export const cartData = createReducer(init.cartInit, {
  [key.SET_CART](state, action) {
    return action.payload
  }
})

const localeVI = {
  lang: 'vi',
  messages: MessageVI
};

const localeEN = {
  lang: 'en',
  messages: MessageEN
};

export const locale = createReducer(localeVI, {
  [key.SET_LOCALE](state, action) {
    switch (action.payload) {
      case 'en':
        return localeEN;
      case 'vi':
        return localeVI;
      default:
        return localeVI;
    }
  }
})