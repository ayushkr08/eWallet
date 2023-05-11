const { MongoClient } = require('mongodb');

// Connection URI for your MongoDB server
const uri = 'mongodb://user:password@your-mongodb-hostname:port/your-database-name';

// Create a new MongoClient
const client = new MongoClient(uri);

async function connect() {
    try {
        // Connect to the MongoDB server
        await client.connect();

        // Print a message to confirm that we have connected successfully
        console.log('Connected to MongoDB');

        // Get a reference to the database
        const db = client.db();

        // Export the database object for use in other parts of the application
        module.exports = db;

    } catch (err) {
        console.error(err);
    }
}
connect();
