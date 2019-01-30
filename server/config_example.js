const server = "";

const database = "";

const user = "";

const password = "";

const db = `mongodb://${user}:${password}@${server}/${database}`;

const port = process.env.PORT || 8000;

exports.db = db;

exports.port = port;

exports.secret = "secret";
