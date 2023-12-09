import express from "express";
import {
  addRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getRooms,
} from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

router.post("/:hotelId", verifyAdmin, addRoom);
router.put("/:id", verifyAdmin, updateRoom);
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);
router.get("/:id", getRoom);
router.get("/", getRooms);

export default router;
