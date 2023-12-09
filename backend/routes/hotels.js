import express from "express";
import {
  addHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
} from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

router.post("/", verifyAdmin, addHotel);
router.put("/:id", verifyAdmin, updateHotel);
router.delete("/:id", verifyAdmin, deleteHotel);
router.get("/:id", getHotel);
router.get("/", getHotels);

export default router;
