const express = require("express");
const router = express.Router();
const User = require("../models/User");
const authMiddleware = require("../middleware/auth");

// Add to favorites
router.post("/favorites/:productId", authMiddleware, async (req, res) => {
  const user = await User.findById(req.user.id);

  if (!user.favorites.includes(req.params.productId)) {
    user.favorites.push(req.params.productId);
    await user.save();
  }

  res.status(200).json({ success: true, favorites: user.favorites });
});

// Remove favorite
router.delete("/favorites/:productId", authMiddleware, async (req, res) => {
  const user = await User.findById(req.user.id);

  user.favorites = user.favorites.filter(
    (fav) => fav.toString() !== req.params.productId
  );

  await user.save();

  res.status(200).json({ success: true, favorites: user.favorites });
});



router.get("/favorites", authMiddleware, async (req, res) => {
  const user = await User.findById(req.user.id).populate("favorites");

  res.status(200).json({
    success: true,
    favorites: user.favorites
  });
});


module.exports = router;
