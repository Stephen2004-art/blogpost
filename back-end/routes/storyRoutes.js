import express from 'express';
import storyModel from '../models/storyModel.js';
import multer from 'multer'
import fs from 'fs'

const router = express.Router();

router.get('/get', async (req, res)=>{

    try {
        const stories = await storyModel.find()
        res.send({
            message: 'Fetched stories successfully!!',
            data: stories
        })
    } catch (error) {
        console.log(error)
        res.send({
            message: 'Failed'
        })
    }
})

router.get('/:id', async (req, res)=>{
    
    try {
        const story = await storyModel.findOne({_id: req.params.id})
        res.send({
            message: 'Fetched Stories Successfully!',
            data: story
        })
    } catch (error) {
        console.log(error)
        res.send({
            message: 'Failed'
        })
    }
})

router.post('/delete/:id', async (req, res)=>{
    try {
        await storyModel.deleteOne({_id: req.params.id})
        res.send('Deleted Successfully')
    } catch (error) {
        console.log(error)
    }
})


router.post('/editstory/:id', async (req, res)=>{
    console.log('editstory')
    console.log(req.body);
    let id = req.params.id;
    const story = await storyModel.findOne({_id: id});
    // story.topic = req.body.topic;
    story.blog = req.body.blog;
    // story.main_image = req.body.mainImage;
    const result = await story.save();
    // console.log('Story updated succesfully');
    res.send({
        message: 'Story updated succesfully',
        data : result
    })
});

const upload = multer({dest: 'uploads/'});
const uploadStoryImages = upload.fields([
    {name: 'image', maxCount: 1},
    {name: 'images', maxCount: 4}
])
router.post('/create', uploadStoryImages, async (req, res)=> {
    try {
        // uploading one image
        console.log(req.files.image[0]);
        let img = req.files.image[0];
        let fileType = (img.mimetype).split('/')[1];
        console.log(fileType)
        let newFileName = img.filename+ '.'+ fileType;
        fs.rename(`./uploads/${img.filename}`, `./uploads/${newFileName}`, ()=>{
            console.log('File renamed successfully!');
        })
        // uploading multiple images
        let multipleImages = req.files.images;
        let imagesArray = multipleImages.map((image)=>{
            let mFileType = (image.mimetype).split('/')[1];
            let mNewFileName = image.filename+ '.'+ mFileType;
            fs.rename(`./uploads/${image.filename}`, `./uploads/${mNewFileName}`, ()=>{
                console.log('File renamed successfully!');
            });
            return mNewFileName;
        })
        
        const newStory = new storyModel({
            topic: req.body.topic,
            blog: req.body.blog,
            mainImage: newFileName,
            images: imagesArray,
        });
        let result = await newStory.save();
        res.send({
            message: 'Story Posted successfully!',
            data: result
        });
    } catch (error) {
        console.log(error)
        res.send({
            message: 'Failed',
            error: error.message
        });
    }
});


export default router;