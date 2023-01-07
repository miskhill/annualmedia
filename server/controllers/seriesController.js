import series from '../models/series.js';

export const getAllSeries = async (req, res) => {
  try {
    const findSeries = await series.find();
    res.status(200).json(findSeries);
  }
  catch (err) {
    res.status(404).json({ message: err.message });
  }
}

export const getSeriesById = async (req, res) => {
  try {
    const { id } = req.params;
    const indiSeries = await
      series.findById
        (id);
    res.status(200).json(indiSeries);
  }
  catch (err) {
    res.status(404).json({ message: err.message });
  }
}

export const createSeries = async (req, res) => {
  const { body } = req;
  const newSeries = new series(body);
  try {
    await newSeries.save();
    res.status(201).json(newSeries);
  }
  catch (err) {
    res.status(409).json({ message: err.message });
  }
}