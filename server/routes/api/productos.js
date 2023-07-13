const express = require("express");
const { check, validationResult } = require("express-validator");
const prisma = require("../../config/prisma-client");

const router = express.Router();

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("description", "Description is required").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const { name, description } = req.body;
    const newProduct = await prisma.product.create({
      data: { name,description },
    });
    res.json({
      message: "Product created successfully",
      status: 201,
      newProduct,
    });
  }
);

router.get("/", async (req, res) => {
  const products = await prisma.product.findMany();
  res.status(200).json({ products });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await prisma.product.findUnique({ where: { id } });
  res.status(200).json({ product });
});

router.put("/:id", async (req, res) => {
  const {name,description} = req.body;
  const user = await prisma.product.update({
    data:{
      name:name,
      description:description
    }
  });
  res.json({user});
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params
  const user = await prisma.product.delete({
    where: {
      id,
    },
  })
  res.json(user)
})


module.exports = router;
