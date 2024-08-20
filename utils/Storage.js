import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinaryPkg from 'cloudinary';


const cloudinary = cloudinaryPkg.v2;

const Storage = () => {

    cloudinary.config({ 
        cloud_name: "dlg2emvsz", 
        api_key: "448797641344156", 
        api_secret: "De_TouHvQDd0xmGDbQyTeI0W0co"
      });
    
      
      const storage = new CloudinaryStorage({
        cloudinary: cloudinary,
        params: {
          folder: 'uploads', 
          allowed_formats: ['jpg', 'jpeg', 'png', 'gif'],
        },
      });
      return storage
  };
  export default Storage;