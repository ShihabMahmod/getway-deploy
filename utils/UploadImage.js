import cloudinaryPkg from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

const cloudinary = cloudinaryPkg.v2;

const UploadImage = (path) => {

   cloudinary.uploader.upload(path,{
        public_id: "event"
    }).catch((error)=>{console.log(error)});
  };
  export default UploadImage;