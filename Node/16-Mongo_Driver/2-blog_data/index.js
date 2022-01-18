const { MongoClient, ObjectId } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);

async function addUsers(nameArr) {
  const collection = client.db("blog").collection("users");

  // Set a unique name index
  await collection.createIndex({ name: 1 }, { unique: true });
  try {
    // Wait for all inserts to finish one way or another
    await Promise.allSettled(
      nameArr.map((name) => {
        const user = { name, posts: [] };
        return collection.insertOne(user);
      }, [])
    );
  } catch (err) {
    console.log(err);
  }
}

async function main() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");

    await addUsers(["Pini Hodadad", "Timmmmmmmmy"]);
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
