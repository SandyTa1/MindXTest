
const express = require('express');
const app = express();
const connectToDb = require('./db.js');
connectToDb();

const Product = require('./inventory.json');

app.get('/products', async (req, res) => {
  const { lowQuantity } = req.query;

  try {
    let products;
    if (lowQuantity) {
      // Retrieve products with quantity less than 100
      products = await Product.find({ quantity: { $lt: 100 } });
    } else {
      // Retrieve all products
      products = await Product.find();
    }

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(3000, () => {
  console.log("App is running at 3000");
  connectToDb();
});
