import pg from 'pg'

const Pool = pg.Pool

/*const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false,
	},
}) */

 const pool = new Pool({
 	database: 'jooseplay_db',
 	host: 'my-db-instance.ckvgjumbnx2z.eu-north-1.rds.amazonaws.com',
 	port: 5432,
 	user: 'churchill',
 	password: 'Pa33MeNow$$',
 })

export default pool
