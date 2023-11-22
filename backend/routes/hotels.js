import express from "express";
import {
  addHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
} from "../controllers/hotelController.js";

const router = express.Router();

router.post("/", addHotel);
router.put("/:id", updateHotel);
router.delete("/:id", deleteHotel);
router.get("/:id", getHotel);
router.get("/", getHotels);

export default router;
