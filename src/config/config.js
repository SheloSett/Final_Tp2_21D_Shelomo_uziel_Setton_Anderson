import dotenv from 'dotenv'

dotenv.config()

const {

    MONGO_URI,
    SERVER_PORT,
    SERVER_HOST,

} = process.env

const config = {
    
    MONGO_URI,
    SERVER_PORT,
    SERVER_HOST,
}

export default config;