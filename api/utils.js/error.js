const errorHandeler = (statueCode,message)=>{
    const error = new Error()
    error.statusCode = statueCode
    error.message = message
    return error;
}

export default errorHandeler;