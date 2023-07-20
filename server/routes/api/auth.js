const express = require("express");
const bodyParser = require("body-parser");
const prisma = require("../../config/prisma-client");
const jwt = require("jsonwebtoken");
const { check } = require("express-validator");

const router = express.Router();

router.use(bodyParser.json());

router.post(
  "/login",
  [
    check("email", "Please insert a valid email").isEmail(),
    check("password", "Please is required").exists(),
  ],
  async (req, res) => {
    const { email, password } = req.body;
    const user = await prisma.user.findMany({
      where: { email, password },
    });
    if (user) {
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: 360000,
      });
      res.status(200).json({ token });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  }
);

module.exports = router;
