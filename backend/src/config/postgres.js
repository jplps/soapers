// Exporting db config from dockerized postgres
module.exports = {
	dialect: 'postgres',
	host: 'postgres',
	username: 'postgres',
	password: 'postgres',
	database: 'distribunetes',
	define: {
		timestamps: true,
		underscored: true,
	},
};