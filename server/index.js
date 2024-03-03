import express from 'express'
import cors from 'cors'
import db from './config/db.js'

const app = express()
app.use(express.json())
app.use(cors())
app.get('/title', async (req, res) => {
    try {
   const [rows] = await db.query('SELECT title FROM `flyers_brochures`  GROUP BY title')
   const titles = rows.map(item => item.title);
   res.json(titles)
    } catch (error) {
        console.log(error)
    }
});
app.post('/getData', async (req, res) => {
   const data = req.body;
   try {
    let query  = 'SELECT ';
    let whereClause = " WHERE 1 "
    let groupByClause = '';
    for (const [key, value] of Object.entries(data)) {
        if (value !== '') {
        //   query += `${key}, `;
          whereClause += `AND ${key} = '${value}'  `;
        } else {
            query += `${key}, `;
          groupByClause = key;
          break;
        }
    }
        query = query.slice(0, -2);
        // whereClause = whereClause.slice(0, -5);
        query += ` ,rate FROM flyers_brochures ${whereClause !== ' WHERE ' ? whereClause : ''} GROUP BY ${groupByClause}`;
        const [rows] = await db.query(query).catch(error => {
            console.error("Error executing query:", error);
            throw new Error("Error executing query");
        });;
        res.status(200).json(rows)
        
    
   } catch (error) {
    console.log(error)
   }

})
app.get('/test', (req, res) => {
    res.status(200).send('hello world')
})
app.listen(8000)
