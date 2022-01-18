const { MongoClient, ObjectId } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);

async function main() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");

  } catch (err) {
    console.log(
      `There was a problem with connecting to the MongoDB server\n\n${err}`
    );
  } finally {
    // Ensures that the client will close when you finish/error
    console.log("Ended");
    await client.close();
  }
}

main();
