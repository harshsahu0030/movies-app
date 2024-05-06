import { catchAsyncErrors } from "../utils/catchAsyncErrors.js";

export const test = catchAsyncErrors(async (req, res, nect) => {
  res.status(200).json({
    success: true,
    message: "test successful",
  });
});
