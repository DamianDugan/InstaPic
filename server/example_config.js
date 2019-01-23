const server = "ds163694.mlab.com:63694";
const database = "instapic";
const user = "root";
const password = "rootroot1";

const db = `mongodb://${user}:${password}@${server}/${database}`;

const port = process.env.PORT || 8000;

exports.db = db;
exports.port = port;
