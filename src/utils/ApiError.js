class ApiErr extends Error {
  constructor(
    statusCode,
    message = "some thing went wrong",
    stack = "",
    errors = [],
  ) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.errors =errors;
    ((this.success = false), (this.data = null));
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
export { ApiErr };
