import { setLocale } from 'Backend/Redux/actions'

export const changeLanguage = () => {
    return (dispatch, getState) => {
        dispatch(setLocale('en'))
    }
}