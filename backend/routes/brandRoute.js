import brandModel from '../models/brandModel.js';
import { upload } from '../middlewares/multer.middleware.js';
import { Router } from 'express';
import { verifyJWT } from '../middlewares/auth.middleware.js';
import { addBrand, removeBrand } from '../controllers/brand.controller.js';
 const router = Router();

router.use(verifyJWT);

router.get('/getall',verifyJWT,(req,res) => {
    brandModel.find()
    .then((result) => {
        console.log(result);
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.get('/get/:brand',verifyJWT,(req,res) => {
    brandModel.find()
    .then((result) => {
        console.log(result);
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.post('/add',(req,res) => {
    new brandModel(req,res).save()
    .then((result) => {
        console.log(result);
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.delete('/delete',(req,res) => {
    brandModel.findOneAndDelete({brand
    }).then((result) => {
        console.log(result);
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

module.exports=router;