import ABOBA from './api';

const AuthService = {
   login: (data) => {
      return ABOBA.post('/login', data)
         .then(({ data }) => {
            ABOBA.defaults.headers['Authtorization'] = `Bearer ${data.token}`;
             console.log('authtorizated!');
             //console.log(data);
             return data;
         })
         .catch(e => {
            console.log('Auth service error', e);
            throw e;
         })
   },
   register: (data) => {

   },
   logout: () => {

   },
}

export default AuthService;