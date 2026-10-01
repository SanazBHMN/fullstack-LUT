const errorHandler = (err, req, res, next) => {
  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  } else if (err.statusCode) {
    return res.status(err.statusCode).json({ message: err.message });
  } else {
    return res.status(404).json({ message: err.message });
  }
};

export default errorHandler;
