const multer = require('multer');
const fs = require('fs');
const path = require('path');

exports.userFile = (req, res, next) => {
   console.log('user file middleware');

   const getFileType = (file) => {
      const mimeType = file.mimetype.split('/')
      return mimeType[mimeType.length - 1];
   }

   const generateFileName = (req, file, cb) => {
      const extension = getFileType(file);
      
      const filename = `${Date.now()}.${extension}`;
      cb(null, file.fieldname + '-' + filename)
   }

   const fileFilter = (req, file, cb) => {
      const extension = getFileType(file);
      const allowedType = /jpeg|png|jpg/;
      const passed = allowedType.test(extension);

      if(passed) {
         return cb(null, true);
      }

      return cb(null, false);
   }

   const storage = multer.diskStorage({
      destination: (req, file, cb) => {
         const {id} = req.user;
         const dest = `uploads/user/${id}`;

         fs.access(dest, error => {
            //if dir doesn't exist

            if (error) {
               console.log('228')
               return fs.mkdir(dest, error => {
                  cb(error, dest);
               })
            //if dir does exist
            } else {
               console.log('336')
               fs.readdir(dest, (error, files) => {
                  if (error) {
                     console.log('READDIR ERROR - ', error);
                     throw error;
                  }
                  console.log('FILES ---- ', files);
                  for(const file of files) {
                     console.log('its FILE -------', file);
                     fs.unlink(path.join(dest, file), error => {
                        if(error) throw error;

                     })
                  }
               })
               return cb(null, dest);
            }
         })
      },
      filename: generateFileName
   })

   return multer({storage, fileFilter}).single('avatar');
}