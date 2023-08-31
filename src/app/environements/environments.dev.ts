const baseUrl ='https://wo-fifa.azurewebsites.net/'
const providersUrl = baseUrl + 'proveedores/'
const teamsUrl = baseUrl + 'equipos/'
export const environments = {
    providers: {
        list: `${providersUrl}listar`,
        create: `${providersUrl}crear`,
        read: `${providersUrl}consultar/`,
        update: `${providersUrl}actualizar/`,
        delete: `${providersUrl}eliminar/`,
    },
    teams: {
        list: `${teamsUrl}listar/`,
        create: `${teamsUrl}crear`,
        read: `${teamsUrl}consultar/`,
        update: `${teamsUrl}actualizar/`,
        delete: `${teamsUrl}eliminar/`,
    },
        login: baseUrl + 'login'

}
