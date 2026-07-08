const asyncHandler = (reqHander) => {
   (req, res, next) => {
    Promise.resolve(reqHander(req, res, next)).catch((err) => next(err));
  };
};
export { asyncHandler };
