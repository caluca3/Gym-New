// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// //const config = require('config');
// const { check, validationResult } = require("express-validator");
// const prisma = require("../../config/prisma-client");
// const { where } = require("../../models/Profile");

// const router = express.Router();

// const secret = process.env.JWT_SECRET;

// router.post(
//   "/",
//   [
//     check("name", "Name is required").not().isEmpty(),
//     check("email", "Please insert a valid email").isEmail(),
//     check(
//       "password",
//       "Please insert a password with 6 o more characters"
//     ).isLength({ min: 6 }),
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);

//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     const { name, email, password } = req.body;

//     try {
//       console.log(req.body);
//       let user = await prisma.user.findUnique({ where: { email } });
//       console.log(user);
//       if (user) {
//         res.status(400).json({ errors: [{ msg: "User already exists" }] });
//       }

//       const salt = await bcrypt.genSalt(10);
//       const passwordHash = await bcrypt.hash(password, salt);

//       user = await prisma.user.create({
//         data: {
//           email,
//           password: passwordHash,
//           profile: {
//             create: {
//               name,
//             },
//           },
//         },
//       });

//       const payload = {
//         user: {
//           id: user.id,
//         },
//       };

//       jwt.sign(payload, secret, { expiresIn: 360000 }, (err, token) => {
//         if (err) throw err;
//         res.json({ token });
//       });
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send("Server error");
//     }
//   }
// );

// router.get("/", async (req, res) => {
//   const user = await prisma.user.findMany();
//   res.json({
//     user,
//   });
// });

// router.delete("/", async (req, res) => {
//   const { id } = req.params;
//   const usuario = await prisma.user.delete({where:id});
//   res.json({
//     message: `usuario ${usuario}eliminado`,
//   });
// });

// module.exports = router;
