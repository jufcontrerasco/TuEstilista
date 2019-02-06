import t from 'tcomb-form-native';

export default formValidation = {
    email: t.refinement(t.String,(s) =>{
        return /@/.test(s); /*Para validar: El texto que ingresamos debe poseer una arroba @*/
    }),
    password: t.refinement(t.String, (s)=>{
        return s.length >= 6;/*Para validar: El texto que ingresamos debe tener mas de 6 caracteres*/
    })
}