import multer from "multer";
import { randomBytes } from "crypto";
import { resolve } from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, resolve(__dirname, "..", "..", "uploads"));
  },
  filename: (req, file, cb) => {
    const fileHash = randomBytes(16).toString("hex");
    const fileName = `${fileHash}-${file.originalname}`;
    cb(null, fileName);
  },
});

export default storage;
