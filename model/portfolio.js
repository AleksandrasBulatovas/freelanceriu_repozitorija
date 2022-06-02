import { DataTypes } from "sequelize";
import { profile } from "./profile.js";

export const portfolio = (sequelize) => {
    const schema = {
        img_url: { type: DataTypes.STRING, allowNull: false },
        title: { type: DataTypes.STRING },
        description: { type: DataTypes.TEXT }
 
    }

    const Portfolio = sequelize.define('Portfolio', schema)
    const Profile = profile(sequelize)

    Profile.hasMany(Portfolio)
    Portfolio.belongsTo(Profile)

    return Portfolio
}