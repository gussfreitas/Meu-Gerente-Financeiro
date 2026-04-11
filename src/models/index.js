import sequelize from "../config/database.js";
import initUsersModel from "./Users.js";

const models = {};

models.Users = initUsersModel(sequelize);

export { sequelize };
export default models;
