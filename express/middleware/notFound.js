const notFound = (req, res, next) => {
  const error = new Error("NOT FOUND");
  error.status = 404;
  next(error);
};

export default notFound;
