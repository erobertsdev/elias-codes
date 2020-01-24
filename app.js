const mysql = require('mysql');
const dateFormat = require('dateformat');
const express = require('express');
const app = express();
const now = new Date();
const admin_user = process.env['admin_user'];
const admin_pass = process.env['admin_pass'];
const database = process.env['database'];

app.set('view engine', 'ejs');

const connection = mysql.createConnection({
	host: 'localhost',
	user: admin_user,
	password: admin_pass,
	database: database
});

const getPosts = (query) => {
	connection.query(query, (err, results) => {
		if (err) throw err;
		return results;
	});
};

app.get('/', (req, res) => {
	let query = 'SELECT * FROM posts ORDER BY id DESC';
	connection.query(query, (err, results) => {
		if (err) throw err;
		let posts = results;
		res.render('index', {
			posts: posts
		});
	});
});

app.listen(3854);
