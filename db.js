import pg from 'pg'

const Pool = pg.Pool

/*const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false,
	},
}) */

 const pool = new Pool({
 	database: 'jooseplay',
 	host: 'localhost',
 	port: 5432,
 	user: 'postgres',
 	password: 'Pa33MeNow$$',
 })

export default pool
