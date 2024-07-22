// importar todos nuestros modelos
import Auto from './autos.model.js';
import Brand from './brands.model.js';
import Country from './countries.model.js';

const initModels = () => {
    // Relacion entre Auto y Marca
    // Un Auto pertenece a una Brand
    Auto.belongsTo(Brand, {foreignKey: 'brandId'});
    // Brands tiene muchos Auto
    Brand.hasMany(Auto, {foreignKey: 'brandId'});

    // Relacion entre brand y country
    // Una Marca pertenece a un País
    Brand.belongsTo(Country, {foreignKey: 'countryId'});
    // Un pais tiene muchas Marcas
    Country.hasMany(Brand, {foreignKey: 'countryId'});

    // Relacion entre autos y autos_transmissions
    
};

export default initModels;