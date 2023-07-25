const express = require("express");
const { check, validationResult } = require("express-validator");
const prisma = require("../../config/prisma-client");

const router = express.Router();

router.get("/", async (req, res) => {
  const categorias = await prisma.categoria.findMany();
  //console.log(categorias);
  res.status(200).json({ categorias });
});

router.post("/", async (req, res) => {
  const { id, name } = req.body;
  const categoria = await prisma.categoria.create({ data: { name } });
  res.status(200).json({ categoria });
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const categoria = await prisma.categoria.update({
    where: { id },
    data: { name: name },
  });
  res.json({ categoria });
});
//Cambiar la referencia del modelo de la base de datos del delete a OnDelete:cascada revisar documentacion de prismajs
//https://www.prisma.io/docs/concepts/components/prisma-schema/relations/referential-actions
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await prisma.categoria.delete({
    where: {
      id,
    },
  });
  res.json(user);
});

//Hacer el sync del proyecto primeramente hacer pull,push fetch

module.exports = router;
