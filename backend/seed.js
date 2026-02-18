const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("dotenv").config();

const User = require("./models/User");
const Product = require("./models/Product");

async function seedDatabase() {
  try {
    // Connect MongoDB
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Connected ✅");

    // Clear existing data
    await User.deleteMany();
    await Product.deleteMany();
    console.log("Old data removed");

    // Hash password
    const hashedPassword = await bcrypt.hash("123456", 10);

    // Create Users
    const users = await User.insertMany([
      {
        username: "user1",
        email: "user1@test.com",
        password: hashedPassword,
        favorites: [],
      },
      {
        username: "user2",
        email: "user2@test.com",
        password: hashedPassword,
        favorites: [],
      },
    ]);

    console.log("2 Users Inserted ✅");

    // Create 10 Products
    const products = await Product.insertMany([
      {
        title: "Microsoft Surface Laptop 5",
        price: 999,
        description: "Powerful Microsoft laptop",
        image: "https://source.unsplash.com/400x300/?laptop",
      },
      {
        title: "Xbox Series X",
        price: 499,
        description: "Next-gen gaming console",
        image: "https://source.unsplash.com/400x300/?xbox",
      },
      {
        title: "Microsoft Surface Pro 9",
        price: 1099,
        description: "Portable and powerful tablet",
        image: "https://source.unsplash.com/400x300/?tablet",
      },
      {
        title: "Wireless Mouse",
        price: 29,
        description: "Smooth wireless mouse",
        image: "https://source.unsplash.com/400x300/?mouse",
      },
      {
        title: "Microsoft Keyboard",
        price: 49,
        description: "Slim wireless keyboard",
        image: "https://source.unsplash.com/400x300/?keyboard",
      },
      {
        title: "Gaming Headset",
        price: 79,
        description: "High quality surround sound",
        image: "https://source.unsplash.com/400x300/?headphones",
      },
      {
        title: "Gaming PC",
        price: 1500,
        description: "High performance PC",
        image: "https://source.unsplash.com/400x300/?gaming-pc",
      },
      {
        title: "Monitor 4K",
        price: 299,
        description: "Ultra HD display",
        image: "https://source.unsplash.com/400x300/?monitor",
      },
      {
        title: "External SSD",
        price: 199,
        description: "Fast portable storage",
        image: "https://source.unsplash.com/400x300/?ssd",
      },
      {
        title: "USB Hub",
        price: 39,
        description: "Multi-port USB adapter",
        image: "https://source.unsplash.com/400x300/?usb",
      },
    ]);

    console.log("10 Products Inserted ✅");

    // Optional: Add some favorites for demo
    users[0].favorites.push(products[0]._id);
    users[0].favorites.push(products[1]._id);
    await users[0].save();

    console.log("Demo Favorites Added ✅");

    console.log("🌱 Seed Completed Successfully!");
    process.exit();

  } catch (error) {
    console.error("Seed Error:", error);
    process.exit(1);
  }
}

seedDatabase();
