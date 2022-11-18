import API from './api';

const AuthService = {
   login: (data) => {
      return API.post('/login', data)
         .then(( {data}) => {
            console.log(data);
            setHeadersAndStorage(data);
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
            setHeadersAndStorage(data);
            console.log('Auth service register method --- authtorizated!');
            return data;
         })
         .catch(e => {
            console.log('Auth service registration error', e);
            throw e;
         })

   },
   logout: () => {
      API.defaults.headers['Authtorization'] = ``;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
   },
}


const setHeadersAndStorage = ({user, token}) => {
   API.defaults.headers['Authtorization'] = `Bearer ${token}`;
   localStorage.setItem('token', token);
   localStorage.setItem('user', JSON.stringify(user));
}

export default AuthService;