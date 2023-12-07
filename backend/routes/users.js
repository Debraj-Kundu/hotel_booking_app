import express from "express";
import {
    addUser,
    updateUser,
    deleteUser,
    getUser,
    getUsers,
  } from "../controllers/userController.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

router.post("/", addUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", getUser);
router.get("/", getUsers);

//test

router.get('/testAuthenticate/:id', verifyToken, (req, res, next)=>{
    res.send('Authenticat eWorkin boi')
})
router.get('/testAuthorize/:id', verifyToken, (req, res, next)=>{
  res.send('Authorize Workin boi')
})
export default router;
