import express from "express";
import multer from "multer";
import path from "path";
import { Router } from "express";
import axios from "axios";
import cloudinaryPkg from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import ImageHandaling from "../controllers/ImageHandaling.js";

const cloudinary = cloudinaryPkg.v2;



const router = Router();

router.use(express.static("public"));


  cloudinary.config({ 
    cloud_name: "dlg2emvsz", 
    api_key: "448797641344156", 
    api_secret: "De_TouHvQDd0xmGDbQyTeI0W0co"
  });

  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'uploads', 
      allowed_formats: ['jpg', 'jpeg', 'webp', 'png', 'gif'],
    },
  });

  const upload = multer({ storage: storage });

  const cpUpload = upload.fields([
    { name: "logo", maxCount: 1 },
    { name: "footer_logo", maxCount: 1 }, 
    { name: "favicon", maxCount: 1 },
    { name: "mantainance_mode_image", maxCount: 1 },
    { name: "logo_dark", maxCount: 1 },
    { name: "logo_sidebar", maxCount: 1 },
    { name: "loginpage_image", maxCount: 1 },
  ]);

  const abUpload = upload.fields([
    { name: 'icone_one', maxCount: 1 },
    { name: 'icone_two', maxCount: 1 },
    { name: 'ceo_image', maxCount: 1 },
    { name: 'main_image', maxCount: 1 },
    { name: 'partial_image_one', maxCount: 1 },
    { name: 'partial_image_two', maxCount: 1 },
    { name: 'partial_image_three', maxCount: 1 },
    { name: 'partial_image_four', maxCount: 1 },
    { name: 'partial_image_five', maxCount: 1 },
    { name: 'partial_image_six', maxCount: 1 },
    { name: 'bottom_image_one', maxCount: 1 },
    { name: 'bottom_image_two', maxCount: 1 },
  ]);


  
  const orUpload = upload.fields([
    { name: 'company_logo', maxCount: 1 },
    { name: 'company_document', maxCount: 1 }
  ])

    
  const ctaUpload = upload.fields([
    { name: 'award_icon', maxCount: 1 },
    { name: 'main_image', maxCount: 1 }
  ])
  
  router.post("/admin/category-store", upload.single("icon"),ImageHandaling.InsertCategory);
  router.put("/admin/category-update/:id", upload.single("icon"),ImageHandaling.UpdateCategory);
  router.post("/admin/subcategory-store", upload.single("icon"),ImageHandaling.InsertSubCategory);
  router.put("/admin/subcategory-update/:id", upload.single("icon"),ImageHandaling.updateSubCategory);
  router.post("/admin/event-store", upload.single("image"),ImageHandaling.InsertEvent);
  
  router.put("/admin/event-update/:id", upload.single("image"),ImageHandaling.UpdateEvent);
  router.post("/admin/ad-store", upload.single("image"),ImageHandaling.InsertAds);
  router.put("/admin/ad-update/:id", upload.single("image"),ImageHandaling.UpdateAds);

  router.post("/admin/slider-store", upload.single("image"),ImageHandaling.InsertSlider);
  router.put("/admin/slider-update/:id", upload.single("image"),ImageHandaling.UpdateSlider);


  router.put("/admin/setting-update",cpUpload,ImageHandaling.UpdateSetting);

  router.put("/admin/aboutus-update",abUpload,ImageHandaling.UpdateAboutus);

  router.put("/admin/cta-update",ctaUpload,ImageHandaling.UpdateCta);


  router.put("/admin/profile-update/:id",upload.single('image'),ImageHandaling.UpdateProfile);


  router.post("/admin/social/media/store",upload.single('icon'),ImageHandaling.InsertSocialMedia);
  router.put("/admin/social/media/update/:id",upload.single('icon'),ImageHandaling.UpdateSocialMedia);

  router.post("/organizer/event-store", upload.single("image"),ImageHandaling.OrganizerInsertEvent);
  router.put("/organizer/event-update/:id", upload.single("image"),ImageHandaling.OrganizerUpdateEvent);


  router.post("/become/organizer-request", orUpload,ImageHandaling.BecomeOrganizer);

  router.post("/mobile/organizer-request", orUpload,ImageHandaling.BecomeOrganizerMobile);

  router.post("/update/user-profile", upload.single("image"),ImageHandaling.UpdateUserProfile);

  
export default router;



