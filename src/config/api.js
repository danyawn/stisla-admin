const URL_BASE = 'http://localhost:5000/api/'

export default {
    apiUsers: URL_BASE + 'users',
    apiRegister: URL_BASE + 'register',
    apiLogin: URL_BASE + "login",
    apiLogout: URL_BASE + "logout",
    apiCars: URL_BASE + "cars",
    apiGetDeletedCar: URL_BASE + "deletecar",
    apiUpdateCar: URL_BASE + "updatecar",
    apiSoftDelete: URL_BASE + "cars",
    apiCreateCar: URL_BASE + "createcar",
}