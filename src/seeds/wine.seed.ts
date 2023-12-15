import mongoose from 'mongoose';
import Wine from '../models/Wine';

async function seedDatabase() {
    await mongoose.connect('mongodb://localhost:27017/winedb', { family: 4 });

    const winesData = [
        { name: 'Vinho A', year: 2020, country: 'Brasil' },
        { name: 'Vinho B', year: 2019, country: 'Chile' },        
    ];

    await Wine.insertMany(winesData);

    console.log('Dados adicionados com sucesso ao banco de dados.');
}

seedDatabase().then(() => mongoose.connection.close());
