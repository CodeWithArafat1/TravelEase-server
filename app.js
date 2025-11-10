const express = require("express");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// test server
app.get("/", (req, res) => {
  res.send({ message: "Server is running...." });
});

// mongoDB Connect
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0.rklba9n.mongodb.net/?appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const server = async () => {
  try {
    await client.connect();
    const db = client.db("TravelEase");
    const productCollection = db.collection("vehicles");
    const bookingCollection = db.collection("myBooking");

    // post single vehicle
    app.post("/api/vehicles", async (req, res) => {
      const vehicles = req.body;
      vehicles.createAt = new Date(vehicles.createAt);
      const data = await productCollection.insertOne(vehicles);
      res.send(data);
    });

    // get all vehicle
    app.get("/api/vehicles", async (req, res) => {
      const data = await productCollection.find().toArray();
      res.send(data);
    });

    // find by email
    app.get("/api/myVehicles", async (req, res) => {
      const { email } = req.query;
      const data = await productCollection.find({ email }).toArray();
      res.send(data);
    });

    // get latest 6 vehicle
    app.get("/api/latestVehicles", async (req, res) => {
      const data = await productCollection
        .find()
        .sort({ createAt: -1 })
        .limit(6)
        .toArray();
      res.send(data);
    });

    // get single vehicle
    app.get("/api/vehicles/:id", async (req, res) => {
      const { id } = req.params;
      const query = { _id: new ObjectId(id) };
      const data = await productCollection.findOne(query);
      res.send(data);
    });

    // delete single vehicle
    app.delete("/api/vehicles/:id", async (req, res) => {
      const { id } = req.params;
      const query = { _id: new ObjectId(id) };
      const data = await productCollection.deleteOne(query);
      res.send(data);
    });

    // update single vehicle
    app.patch("/api/vehicles/:id", async (req, res) => {
      const { id } = req.params;
      const query = { _id: new ObjectId(id) };
      const vehicles = req.body;

      const update = {
        $set: {
          ...vehicles,
        },
      };
      const data = await productCollection.updateOne(query, update);
      res.send(data);
    });

    // my booking apis
    app.post("/api/myBooking", async (req, res) => {
      const booking = req.body;
      delete booking._id;
      const data = await bookingCollection.insertOne(booking);
      res.send(data);
    });

    // get booking by email
    app.get("/api/myBooking", async (req, res) => {
      const { email } = req.query;
      const data = await bookingCollection.find({ email }).toArray();
      res.send(data);
    });

    // delete single booking
    app.delete("/api/myBooking/:id", async (req, res) => {
      const { id } = req.params;
      const query = { _id: new ObjectId(id) };
      const data = await bookingCollection.deleteOne(query);
      res.send(data);
    });

    await client.db("admin").command({ ping: 1 });
    console.log("mongoDB connected successfully!");
  } catch (err) {
    console.log(err);
  }
};
server();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running ", PORT);
});
