import { DataTypes } from "sequelize";
import db from "../utils/database.js";

const Brand = db.define('brands', {
    name: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    countryId: {
        type: DataTypes.INTEGER,
        // references: {
        //     model: 'countries',
        //     key: 'id',
        // },
        allowNull: false,
        field: "country_id",
    }
}, {
    timestamps: false
});

export default Brand;