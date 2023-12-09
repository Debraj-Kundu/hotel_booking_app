import express from "express";
import {
    addUser,
    updateUser,
    deleteUser,
    getUser,
    getUsers,
  } from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

// router.post("/", verifyUser, addUser);
router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);
router.get("/:id", verifyUser, getUser);
router.get("/", verifyAdmin, getUsers);

//test

router.get('/testAuthenticate/:id', verifyToken, (req, res, next)=>{
    res.send('Authenticat eWorkin boi')
})
router.get('/testAuthorize/:id', verifyUser, (req, res, next)=>{
  res.send('Authorize Workin boi')
})
router.get('/testAdmin/:id', verifyAdmin, (req, res, next)=>{
  res.send('Authorize admin Workin boi')
})
export default router;
