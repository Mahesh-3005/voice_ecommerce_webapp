const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const products = ["iphone", "shoes", "laptop"];

app.post("/command", (req, res) => {
  const { command } = req.body;
  const text = command.toLowerCase();

  let action = "unknown";
  let product = null;
  let quantity = 1;
  let message = "Sorry, I didn’t understand";

  // detect product
  product = products.find((p) => text.includes(p));

  // detect quantity
  const numMatch = text.match(/\d+/);
  if (numMatch) quantity = parseInt(numMatch[0]);

  if (text.includes("show products")) {
    action = "show_products";
    message = "Showing products";
  }

  else if (text.includes("search") && product) {
    action = "search_product";
    message = `Showing ${product}`;
  }

  else if (text.includes("add") && product) {
    action = "add_to_cart";
    message = `Added ${quantity} ${product}`;
  }

  else if (text.includes("remove") && product) {
    action = "remove_from_cart";
    message = `Removed ${product}`;
  }

  else if (text.includes("clear cart")) {
    action = "clear_cart";
    message = "Cart cleared";
  }

  else if (text.includes("show cart")) {
    action = "show_cart";
    message = "Here is your cart";
  }

  res.json({ action, product, quantity, message });
});

app.listen(5000, () => console.log("✅ Server running"));