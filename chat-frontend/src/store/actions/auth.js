import AuthService from './../../services/authService';

export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';

export const login = (params, navigate) => dispatch => {
   return AuthService.login(params)
      .then(data => {
         console.log('LOGIN --- ', data);
         dispatch({type: LOGIN, payload: data})
         navigate('/');
      })
      .catch()
}

export const register = (params, navgiate) => dispatch => {
   return AuthService.register(params)
      .then(data => {
         console.log('REGISTER --- ',data);
         dispatch({type: REGISTER, payload:data});
         navgiate('/')
      })
}