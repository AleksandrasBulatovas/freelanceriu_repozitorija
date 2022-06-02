import { database } from '../database/connection.js'

export const getAll = async (profileId) => {
    try {
        return await database.Portfolio.findAll({ where: { profileId }, raw: true })
    } catch {
        return false
    }
}

export const getById = async (id) => {
    try {
        return await database.Portfolio.findByPk(id)
    } catch {
        return false
    }
}
 
export const insert = async (data) => {
    try {
        const portfolio = new database.Portfolio(data)
        await portfolio.save()
        return portfolio.dataValues.id
    } catch(e) {
        console.log(e)
        return false
    }
}

export const remove = async (id) => {
    try {
        await getById(id).destroy()
        return true
    } catch {
        return false
    }
}