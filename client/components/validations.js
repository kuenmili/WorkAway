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

const businessValidations = (businessData) => {
    
    let errors = {}

    if (!/\S+@\S+\.\S+/.test(businessData.email)){
        errors.email = 'Por favor, revisa tu email'
    }

    if (!businessData.email){
        errors.email = 'Por favor, ingrese su email'
    }

    if (businessData.email.length > 35){
        errors.email = 'El email no debe superar los 35 caracteres'
    }

    if (!businessData.password.match(/\d/)){
        errors.password = "Tiene que tener al menos 1 numero"
    }
        
    if (businessData.password.length <= 8 || businessData.password.length >= 16){
        errors.password = "Tiene que tener entre 8 y 16 caracteres"
    }
    
    return errors
}

const createBusinessValidation = (input) => {
    let errors = {}

    if (!input.name){
        errors.name = "Por favor, ingresa tu nombre"
    }

    if (isNaN(input.cuit) || !input.cuit){
        errors.cuit = "Por favor ingresa un numero de cuit valido"
    }

    if (!/\S+@\S+\.\S+/.test(input.email)){
        errors.email = 'Por favor, revisa tu email'
    }

    if (!input.email){
        errors.email = 'Por favor, ingrese su email'
    }

    if (input.email.length > 35){
        errors.email = 'El email no debe superar los 35 caracteres'
    }

    if (!input.password.match(/\d/)){
        errors.password = "Tiene que tener al menos 1 numero"
    }
        
    if (input.password.length <= 8 || input.password.length >= 16){
        errors.password = "Tiene que tener entre 8 y 16 caracteres"
    }

    if(isNaN(input.cellphone_number) || !input.cellphone_number){
        errors.cellphone_number = "Tiene que ingresar un numero de telefono valido"
    }

    if (!input.address){
        errors.address = "Tiene que ingresar una direccion valida"
    }

    return errors
}

export {
    updateUserValidation,
    businessValidations,
    createBusinessValidation,
};