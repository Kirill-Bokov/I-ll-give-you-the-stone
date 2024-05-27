import mysql from 'mysql2';

export const connection = mysql.createPool({
    host: 'game.recolter.ru',
    user: 'stone',
    password: 'Stone123',
    database: 'stone',
    rowsAsArray: false,
    debug: false
});

