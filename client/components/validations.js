const updateUserValidation = (data) => {

    let errors = {}

    if (!data.first_name){
        errors.first_name = 'Este campo es obligatorio'
    }

    if (!data.last_name){
        errors.last_name = 'Este campo es obligatorio'
    }

    if (!/\S+@\S+\.\S+/.test(data.email)){
        errors.email = 'Por favor, revisa tu email'
    }

    if (!data.email){
        errors.email = 'Por favor, ingrese su email'
    }

    if (data.email.length > 35){
        errors.email = 'El email no debe superar los 35 caracteres'
    }

    if (!data.password.match(/\d/)){
        errors.password = "Tiene que tener al menos 1 numero"
    }
        
    if (data.password.length <= 8 || data.password.length >= 16){
        errors.password = "Tiene que tener entre 8 y 16 caracteres"
    }

    if (isNaN(data.cellphone_number) || !data.cellphone_number){
        errors.cellphone_number = "Por favor, ingrese un número de celular válido"
    }

    return errors;
} 

export {
    updateUserValidation,
};
