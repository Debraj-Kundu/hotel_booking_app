import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
// import { createError } from "../utils/errors.js";

const addRoom = async (req, res, next) => {
  const hotelid = req.params.hotelId;

  try {
    const newRoom = await Room.create(req.body);
    await Hotel.findByIdAndUpdate(hotelid, {
      $push: { rooms: newRoom._id },
    });
    res.status(200).json(newRoom);
  } catch (err) {
    next(err);
  }
};

const updateRoom = async (req, res, next) => {
  try {
    const { id } = req.params;

    const room = await Room.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(room);
  } catch (error) {
    next(error);
  }
};

const deleteRoom = async (req, res, next) => {
  const hotelid = req.params.hotelId;

  try {
    const { id } = req.params;
    
    await Room.findByIdAndDelete(id);
    await Hotel.findByIdAndUpdate(hotelid, {
      $pull: { rooms: req.params.id },
    });
    
    res.status(200).json("Room deleted successfully");
  } catch (error) {
    next(error);
  }
};

const getRoom = async (req, res, next) => {
  try {
    const { id } = req.params;

    const room = await Room.findById(id);
    res.status(200).json(room);
  } catch (error) {
    next(error);
  }
};

const getRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    next(error);
  }
};

export { addRoom, updateRoom, deleteRoom, getRoom, getRooms };
