import API from './api';

const AuthService = {
   login: (data) => {
      return API.post('/login', data)
         .then(({ data }) => {
             API.defaults.headers['Authtorization'] = `Bearer ${data.token}`;
             console.log('Auth service login method --- authtorizated!');
             //console.log(data);
             return data;
         })
         .catch(e => {
            console.log('Auth service registration error', e);
            throw e;
         })
   },
   register: (data) => {
      return API.post('/register', data)
         .then(({data}) => {
            API.defaults.headers['Authtorization'] = `Bearer ${data.token}`;
            console.log('Auth service register method --- authtorizated!');
            return data;
         })
         .catch(e => {
            console.log('Auth service registration error', e);
            throw e;
         })

   },
   logout: () => {

   },
}

export default AuthService;