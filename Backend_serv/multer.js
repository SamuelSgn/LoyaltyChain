const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

//file validation

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
        cb(null, true)
    } 
    else {
        //orevent to upload

        cb({message: 'Unsupported File  Format'}, false)
    }
}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
})

module.exports = upload;