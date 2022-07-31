import multer from "multer"
import { __dirname } from "./settings.js"


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname+'/public/static/AgenciesPhoto')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
      cb(null, uniqueSuffix+'-'+file.originalname)
    }
  })

   export const upload = multer({ storage: storage })