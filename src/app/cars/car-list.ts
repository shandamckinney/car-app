import { Car } from '../models/car';

const cars: Car[] = [
    {
         
        brand: 'Renault',
        model: 'Clio',
        engine: {
            consumption: 4,
            fuel: "petrol",
            power: 100
        },
        km: 100000,
        price: 7000,
        year: 2010
    },

    {

        brand: 'Mazda 3',
        model: 'Sport ',
        engine: {
            consumption: 4,
            fuel: 'petrol',
            power: 100
        },
        km: 100000,
        price: 7000,
        year: 2010
    },

    {

        brand: 'VW',
        model: 'Passat',
        engine: {
            consumption: 4,
            fuel: "petrol",
            power: 100
        },
        km: 100000,
        price: 7000,
        year: 2010
    },
];

export default cars;