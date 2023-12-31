import Hotel from "../models/Hotel.js";

const addHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.create(req.body);
    res.status(201).json(hotel);
  } catch (error) {
    next(error);
  }
};

const updateHotel = async (req, res, next) => {
  try {
    const { id } = req.params;

    const hotel = await Hotel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

const deleteHotel = async (req, res, next) => {
  try {
    const { id } = req.params;

    await Hotel.findByIdAndDelete(id);
    res.status(200).json("Hotel deleted successfully");
  } catch (error) {
    next(error);
  }
};

const getHotel = async (req, res, next) => {
  try {
    const { id } = req.params;

    const hotel = await Hotel.findById(id);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

const getHotels = async (req, res, next) => {
  try {
    // console.log(req.query)
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
};

export {
  addHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
};
