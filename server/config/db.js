import {createConnection} from 'mysql2/promise'

const db = await createConnection({
host:'localhost',
user: 'root',
password: '',
database : 'four_hover',
charset  : 'utf8mb4'});

export default db

