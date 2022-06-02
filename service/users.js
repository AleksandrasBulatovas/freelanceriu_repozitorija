import { database } from "../database/connection.js";

export const getUser = async (id) => {
    try {
        return await database.Users.findByPk(id)
    } catch {
        return false
    }
}

export const getUserByEmail = async (email) => {
    try {
        return await database.Users.findOne({
            where: {
                email
            },
            raw: true
        })
    } catch {
        return false
    }
}

export const exists = async (fields = {}) => {
    try {
        const count = await database.Users.count({
            where: fields
        })
        return count != 0
    } catch (e) {
        cpnsole.log(e)
        return false

    }
}

export const insert = async (data) => {
    try {
        const user = new database.Users(data)
        await user.save()
        return user.dataValues.id
    } catch (e) {
        console.log(e)
        return false


    }
}