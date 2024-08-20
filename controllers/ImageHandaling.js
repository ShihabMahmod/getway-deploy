
import Storage from "../utils/Storage.js";
import UploadImage from "../utils/UploadImage.js";
import cloudinaryPkg from 'cloudinary';
import axios from "axios";

const cloudinary = cloudinaryPkg.v2;

class ImageHandaling {

  static async InsertCategory(req, res){
   try {
       const uniqueId = new Date().getTime();
        const result = await cloudinary.uploader.upload(req.file.path,{
            public_id: `category_${uniqueId}`
        }).catch((error)=>{console.log(error)});
        
      let data = {};
      data.name = req.body && req.body.name ? req.body.name : '';
      if(req.file){
        data.icon = result.url;
      }
      return res.json(data);
      const adminUrl = process.env.ADMIN_URL;
      const endpoint = "/category";

      const finalData = Object.keys(data).length > 0 ? data : {};
        const resp = await axios.post(`${adminUrl}${endpoint}`, finalData);
        if(resp.data.errors){
            return res.status(400).json(resp.data);
        }
        return res.json(resp.data);
        
      } catch (error) {
        res.status(500).send(error);
      }
  } 

  static async UpdateCategory(req, res) {
    
    try {
        const id = parseInt(req.params.id);
        let data = {};
        data.id = req.body && id ? id : '';
        data.name = req.body && req.body.name ? req.body.name : '';
        data.status = req.body && req.body.status ? req.body.status : '';

        if(req.file){
            const uniqueId = new Date().getTime();
            const result = await cloudinary.uploader.upload(req.file.path,{
              public_id: `category_${uniqueId}`
            }).catch((error)=>{console.log(error)});
            data.icon = result.url;
        }
        const adminUrl = process.env.ADMIN_URL;
        const endpoint = "/category/update";

        const finalData = Object.keys(data).length > 0 ? data : {};
        const resp = await axios.post(`${adminUrl}${endpoint}`,finalData);
        if(resp.data.errors){
            return res.status(400).json(resp.data);
        }
        return res.json(resp.data);
      } catch (error) {
        res.status(500).send(error);
      }
  }
  static async InsertSubCategory(req, res){
   try {

        let data = {};
        data.name = req.body && req.body.name ? req.body.name : '';
        data.category_id = req.body && req.body.category_id ? req.body.category_id : '';
        
        if(req.file){
            const uniqueId = new Date().getTime();
            const result = await cloudinary.uploader.upload(req.file.path,{
                ppublic_id: `subcategory_${uniqueId}`
            }).catch((error)=>{console.log(error)});
            data.icon = result.url;
        }
        const adminUrl = process.env.ADMIN_URL;
        const endpoint = "/subcategory";

        const finalData = Object.keys(data).length > 0 ? data : {};
        const resp = await axios.post(`${adminUrl}${endpoint}`,finalData);
        if(resp.data.errors){
            return res.status(400).json(resp.data);
        }
        return res.json(resp.data);

        } catch (error) {
            res.status(500).send(error);
        }
   } 
  static async updateSubCategory(req, res){
    try {
       
            const id = parseInt(req.params.id);
            let data = {};
            data.id = req.body && id ? id : '';
            data.name = req.body && req.body.name ? req.body.name : '';
            data.category_id = req.body && req.body.category_id ? req.body.category_id : '';
            data.status = req.body && req.body.status ? req.body.status : '';
            if(req.file){
                const uniqueId = new Date().getTime();
                const result = await cloudinary.uploader.upload(req.file.path,{
                    public_id: `subcategory_${uniqueId}`
                }).catch((error)=>{console.log(error)});
                data.icon = result.url;
            }

             const adminUrl = process.env.ADMIN_URL;
             const endpoint = "/subcategory/update";

            const finalData = Object.keys(data).length > 0 ? data : {};
            const resp = await axios.post(`${adminUrl}${endpoint}`,finalData);
            if(resp.data.errors){
                return res.status(400).json(resp.data);
            }
            return res.json(resp.data);

            } catch (error) {
                res.status(500).send(error);
            }
   } 
   static async InsertEvent(req, res){
    try {
        var data = {};
        data = req.body;
        data.is_feature = 0;
        data.city_id = 1;
   
         if(req.file){

             const uniqueId = new Date().getTime();
             const result = await cloudinary.uploader.upload(req.file.path,{
                 public_id: `event_${uniqueId}`
             }).catch((error)=>{console.log(error)});
             data.image = result.url;
         }
         const adminUrl = process.env.ADMIN_URL;
         const endpoint = "/event";
         //return res.json(data);
         const resp = await axios.post(`${adminUrl}${endpoint}`,data);
         if(resp.data.errors){
            return res.status(400).json(resp.data);
        }
        return res.status(200).json(resp.data);
         } catch (error) {
             res.status(500).send(error);
         }
    }

    static async UpdateEvent(req, res){
        try {
            
            const id = parseInt(req.params.id);
            var data = {};
            data = req.body;
             if(req.file){
                 const uniqueId = new Date().getTime();
                 const result = await cloudinary.uploader.upload(req.file.path,{
                     public_id: `event_${uniqueId}`
                 }).catch((error)=>{console.log(error)});
                 data.image = result.url;
             }
             data.id = id;

             const adminUrl = process.env.ADMIN_URL;
             const endpoint = "/event/update";
             const resp = await axios.post(`${adminUrl}${endpoint}`,data);
             if(resp.data.errors){
                return res.status(400).json(resp.data);
            }
            return res.status(200).json(resp.data);
             } catch (error) {
                 res.status(500).send(error);
             }
        }
    
    static async InsertAds(req, res){
      try {
        
          var data = {};
          data = req.body;
           if(req.file){
               const uniqueId = new Date().getTime();
               const result = await cloudinary.uploader.upload(req.file.path,{
                   public_id: `ads_${uniqueId}`
               }).catch((error)=>{console.log(error)});
               data.image = result.url;
           }

           const adminUrl = process.env.ADMIN_URL;
           const endpoint = "/ad";

           const finalData = Object.keys(data).length > 0 ? data : {};
           const resp = await axios.post(`${adminUrl}${endpoint}`,finalData);
           if(resp.data.errors){
            return res.status(400).json(resp.data);
        }
        return res.json(resp.data);
           } catch (error) {
               res.status(500).send(error);
           }
      }

      static async UpdateAds(req, res){
        try {
          
            const id = parseInt(req.params.id);
            let data = {};
            data = req.body;
            data.id =  id;
             if(req.file){
                 const uniqueId = new Date().getTime();
                 const result = await cloudinary.uploader.upload(req.file.path,{
                     public_id: `ads_${uniqueId}`
                 }).catch((error)=>{console.log(error)});
                 data.image = result.url;
             }
             
             const adminUrl = process.env.ADMIN_URL;
             const endpoint = "/ad/update";

             const finalData = Object.keys(data).length > 0 ? data : {};
             const resp = await axios.post(`${adminUrl}${endpoint}`,finalData);
             if(resp.data.errors){
                return res.status(400).json(resp.data);
            }
            return res.json(resp.data);
             } catch (error) {
                 res.status(500).send(error);
             }
        }

    static async InsertSlider(req, res){
           try {
            var data = {};
            data = req.body;
            if(req.file){
                const uniqueId = new Date().getTime();
                const result = await cloudinary.uploader.upload(req.file.path,{
                    public_id: `slider_${uniqueId}`
                }).catch((error)=>{console.log(error)});
                data.image = result.url;
            }

            const adminUrl = process.env.ADMIN_URL;
            const endpoint = "/slider";

            const finalData = Object.keys(data).length > 0 ? data : {};
            const resp = await axios.post(`${adminUrl}${endpoint}`,finalData);
            if(resp.data.errors){
                return res.status(400).json(resp.data);
            }
            return res.json(resp.data);
            } catch (error) {
                res.status(500).send(error);
            }
    }

    static async UpdateSlider(req, res){
        try {
            const id = parseInt(req.params.id);
            let data = {};
            data.link = req.body && req.body.link ? req.body.link : '';
            data.status = req.body && req.body.status ? req.body.status : '';
            data.id =  id;
            if(req.file){
               const uniqueId = new Date().getTime();
                const result = await cloudinary.uploader.upload(req.file.path,{
                    public_id: `slider_${uniqueId}`
                }).catch((error)=>{console.log(error)});
                data.image = result.url;
            }

            const adminUrl = process.env.ADMIN_URL;
            const endpoint = "/slider/update";

            const finalData = Object.keys(data).length > 0 ? data : {};
            const resp = await axios.post(`${adminUrl}${endpoint}`,finalData);
            if(resp.data.errors){
                return res.status(400).json(resp.data);
            }
            return res.json(resp.data);
            } catch (error) {
                res.status(500).send(error);
            }
        }    

    static async UpdateAboutus(req, res){
    try {

        const files = req.files;
        let data = req.body;
        for (const fieldName in files) {
            const file = files[fieldName][0];
            const filePath = file.path;

            const result = await cloudinary.uploader.upload(filePath, {
                public_id: `event/${fieldName}-${Date.now()}`
            });
            const url = result.url;
            data[fieldName] = url;
        }

        const adminUrl = process.env.ADMIN_URL;
        const endpoint = "/about/update";

        const resp = await axios.post(`${adminUrl}${endpoint}`,data);
        if(resp.data.errors){
            return res.status(400).json(resp.data);
        }
        return res.json(resp.data);

    } catch (error) {
        console.error('Error in UpdateAboutUs:', error);
        res.status(500).send(error);
    }
   }
   static async UpdateCta(req, res){
    try {
        const files = req.files;
        let data = req.body;
        for (const fieldName in files) {
            const file = files[fieldName][0];
            const filePath = file.path;

            const result = await cloudinary.uploader.upload(filePath, {
                public_id: `event/${fieldName}-${Date.now()}`
            });
            const url = result.url;
            data[fieldName] = url;
        }
        
        const adminUrl = process.env.ADMIN_URL;
        const endpoint = "/cta/update";

         const resp = await axios.post(`${adminUrl}${endpoint}`,data);
         if(resp.data.errors){
            return res.status(400).json(resp.data);
        }
        return res.status(200).json(resp.data);
         } catch (error) {
             res.status(500).send(error);
         }
}

   static async UpdateSetting(req, res){
    try {
        
        const files = req.files;
        let data = req.body;
        for (const fieldName in files) {
            const file = files[fieldName][0];
            const filePath = file.path;

            const result = await cloudinary.uploader.upload(filePath, {
                public_id: `event/${fieldName}-${Date.now()}`
            });
            const url = result.url;
            data[fieldName] = url;
        }
        const adminUrl = process.env.ADMIN_URL;
        const endpoint = "/setting/update";

        const resp = await axios.post(`${adminUrl}${endpoint}`,data);
        if(resp.data.errors){
            return res.status(400).json(resp.data);
        }
        return res.json(resp.data);
    } catch (error) {
        console.error('Error in UpdateAboutUs:', error);
        res.status(500).send(error);
    }
   }

   static async UpdateProfile(req, res) {
    
    try {
        const id = parseInt(req.params.id);
        let data = {};
        data.id = req.body && id ? id : '';
        data.name = req.body && req.body.name ? req.body.name : '';
        data.email = req.body && req.body.email ? req.body.email : '';
        data.country = req.body && req.body.country ? req.body.country : '';
        data.city = req.body && req.body.city ? req.body.city : '';
        data.address = req.body && req.body.address ? req.body.address : '';
        data.postal_code = req.body && req.body.email ? req.body.postal_code : '';

        if(req.file){
            const uniqueId = new Date().getTime();
            const result = await cloudinary.uploader.upload(req.file.path,{
              public_id: `profile_${uniqueId}`
            }).catch((error)=>{console.log(error)});
            data.image = result.url;
        }
        const adminUrl = process.env.ADMIN_URL;
        const endpoint = "/profile/update";

        const finalData = Object.keys(data).length > 0 ? data : {};
        const resp = await axios.post(`${adminUrl}${endpoint}`,finalData);
        if(resp.data.errors){
            return res.status(400).json(resp.data);
        }
        return res.json(resp.data);
      } catch (error) {
        res.status(500).send(error);
      }
  }

  static async InsertSocialMedia(req, res){
    try {
      const uniqueId = new Date().getTime();
         const result = await cloudinary.uploader.upload(req.file.path,{
             public_id: `socialmedia_${uniqueId}`
         }).catch((error)=>{console.log(error)});
         
       let data = {};
       data.name = req.body && req.body.name ? req.body.name : '';
       data.link = req.body && req.body.link ? req.body.link : '';
       if(req.file){
         data.icon = result.url;
       }

       const adminUrl = process.env.ADMIN_URL;
        const endpoint = "/social/media";

       const finalData = Object.keys(data).length > 0 ? data : {};
         const resp = await axios.post(`${adminUrl}${endpoint}`, finalData);
         if(resp.data.errors){
             return res.status(400).json(resp.data);
         }
         return res.json(resp.data);
         
       } catch (error) {
         res.status(500).send(error);
       }
   } 
   static async UpdateSocialMedia(req, res){
    try {
        const uniqueId = new Date().getTime();
         const result = await cloudinary.uploader.upload(req.file.path,{
             public_id: `socialmedia_${uniqueId}`
         }).catch((error)=>{console.log(error)});
         
       const id = parseInt(req.params.id);
       let data = {};
       data.id = req.body && id ? id : '';
       data.name = req.body && req.body.name ? req.body.name : '';
       data.link = req.body && req.body.link ? req.body.link : '';
       data.status = req.body && req.body.status ? req.body.status : '';
       if(req.file){
         data.icon = result.url;
       }

       const adminUrl = process.env.ADMIN_URL;
       const endpoint = "/social/media/update";

       const finalData = Object.keys(data).length > 0 ? data : {};
         const resp = await axios.post(`${adminUrl}${endpoint}`, finalData);
         if(resp.data.errors){
             return res.status(400).json(resp.data);
         }
         return res.json(resp.data);
         
       } catch (error) {
         res.status(500).send(error);
       }
   }
   
   
   static async OrganizerInsertEvent(req, res){
    try {
        var data = {};
        data = req.body;
        data.is_feature = 0;
        data.city_id = 1;
      
         if(req.file){
           const uniqueId = new Date().getTime();
             const result = await cloudinary.uploader.upload(req.file.path,{
                 public_id: `event_${uniqueId}`
             }).catch((error)=>{console.log(error)});
             data.image = result.url;
         }

         const adminUrl = process.env.ADMIN_URL;
        const endpoint = "/event";

         const resp = await axios.post(`${adminUrl}${endpoint}`,data);
         if(resp.data.errors){
            return res.status(400).json(resp.data);
        }
        return res.status(200).json(resp.data);
         } catch (error) {
             res.status(500).send(error);
         }
    }

    static async OrganizerUpdateEvent(req, res){
        try {
            const id = parseInt(req.params.id);
            let data = {};
            
            data = req.body;
            data.is_feature = 0;
            data.city_id = 1;
            data.id = req.body && id ? id : '';
             if(req.file){
               const uniqueId = new Date().getTime();
                 const result = await cloudinary.uploader.upload(req.file.path,{
                     public_id: `event_${uniqueId}`
                 }).catch((error)=>{console.log(error)});
                 data.image = result.url;
             }
             const adminUrl = process.env.ADMIN_URL;
             const endpoint = "/event/update";

             const resp = await axios.post(`${adminUrl}${endpoint}`,data);
             if(resp.data.errors){
                return res.status(400).json(resp.data);
            }
            return res.status(200).json(resp.data);
             } catch (error) {
                 res.status(500).send(error);
             }
    }

    static async BecomeOrganizer(req, res){
        try {
            const files = req.files;
            let data = req.body;
            for (const fieldName in files) {
                const file = files[fieldName][0];
                const filePath = file.path;
    
                const result = await cloudinary.uploader.upload(filePath, {
                    public_id: `event/${fieldName}-${Date.now()}`
                });
                const url = result.url;
                data[fieldName] = url;
            }
           
             const userUrl = process.env.USER_URL;
             const endpoint = "/seller-request";
          
             const resp = await axios.post(`${userUrl}${endpoint}`,data);
             if(resp.data.errors){
                return res.status(400).json(resp.data);
            }
            return res.status(200).json(resp.data);
             } catch (error) {
                 res.status(500).send(error);
             }
    }
  static async BecomeOrganizerMobile(req, res){
       // try {

             const userUrl =  process.env.USER_URL;
             const endpoint = "/seller-request/mobile";
            
          
            const files = req.files;
            let data = req.body;
            for (const fieldName in files) {
                const file = files[fieldName][0];
                const filePath = file.path;
    
                const result = await cloudinary.uploader.upload(filePath, {
                    public_id: `event/${fieldName}-${Date.now()}`
                });
                const url = result.url;
                data[fieldName] = url;
            }
            
             const resp = await axios.post(`${userUrl}${endpoint}`,data);
            
             if(resp.data.errors){
                return res.status(400).json(resp.data);
            }
            return res.status(200).json(resp.data);
            //  } catch (error) {
            //      res.status(500).send(error);
            //  }
    }
    static async UpdateUserProfile(req, res){
        try {

            var data = {};
            data = req.body;
            if(req.file){
              const uniqueId = new Date().getTime();
                const result = await cloudinary.uploader.upload(req.file.path,{
                    public_id: `profile_${uniqueId}`
                }).catch((error)=>{console.log(error)});
                data.image = result.url;
            }
            const finalData = Object.keys(data).length > 0 ? data : {};

             const userUrl = process.env.USER_URL;
             const endpoint = "/profile/update-profile";
          
            const resp = await axios.post(`${userUrl}${endpoint}`,finalData);
             if(resp.data.errors){
                return res.status(400).json(resp.data);
            }
            return res.status(200).json(resp.data);
             } catch (error) {
                 res.status(500).send(error);
             }
    }
}
export default ImageHandaling;
