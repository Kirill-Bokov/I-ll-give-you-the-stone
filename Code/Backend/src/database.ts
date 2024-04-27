import mysql from 'mysql2';

export const connection = mysql.createConnection({
    host: '192.168.1.240',
    user: 'stone',
    password: 'Stone123',
    database: 'stone',
    connectionLimit: 10,
    rowsAsArray: true,
    debug: false
});

