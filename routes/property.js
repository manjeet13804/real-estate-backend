
const router = require('express').Router();
const propertyModel = require('../models/property')
const userModel = require('../models/user')
var jwt = require('jsonwebtoken');
const dotenv=require("dotenv");
dotenv.config()

const cors=require("cors")


router.use(cors({
    origin:"*"
}))

router.use('/', (req, res, next) => {
   // console.log(req.body)
    if (req.headers.authorization) {

        const token = req.headers.authorization.split("ESTATE ")[1];
        try {
            jwt.verify(token, process.env.secret, async function (err, decoded) {
                if (err) {
                    res.status(400).json(err.message)
                }
                const user = await userModel.findOne({ _id: decoded.data })
                req.user = user._id;
                next();
            });
        }
        catch (e) {
            res.status(400).json(e.message)
        }
    }
    else {
        res.status(400).json({ message: "user invalid" })
    }

})

router.get('/', async (req, res) => {
    try {
        const posts = await propertyModel.find();
        res.status(200).json(posts);
        console.log(posts)
    } catch (e) {
        console.log(e.message)
        res.status(400).json({
            message: e.message
        })
    }
})





router.put('/:id', async (req, res) => {
    try {
        await propertyModel.findByIdAndUpdate(req.params.id, req.body)
        const posts = await propertyModel.findById(req.params.id);
        res.status(200).json(posts);
    } catch (e) {
        console.log(e.message)
        res.status(400).json({
            message: e.message
        })
    }
})
router.post('/', async (req, res) => {
    const PPDId = "PPD" + parseInt(Math.random() * 10000)
    const Views = parseInt(Math.random() * 10)
    const DaysLeft = parseInt(Math.random() * 10)
    console.log(req.body)
    try {
        const asset = await propertyModel.create({
            //mention as per the schema which is to be created

            propertyType: req.body.propertyType,
            negotable: req.body.negotable,
            price: req.body.price,
            ownership: req.body.ownership,
            propertyAge: req.body.propertyAge,
            propertyApproved: req.body.propertyApproved,
            propertyDescription: req.body.propertyDescription,
            bankLoan: req.body.bankLoan,
            length: req.body.length,
            breath: req.body.breath,
            totalArea: req.body.totalArea,
            areaUnit: req.body.areaUnit,
            noOfBHK: req.body.noOfBHK,
            noOfFloor: req.body.noOfFloor,
            attached: req.body.attached,
            western: req.body.western,
            furnished: req.body.furnished,
            carParking: req.body.carParking,
            lift: req.body.lift,
            electricity: req.body.electricity,
            facing: req.body.facing,
            name: req.body.name,
            mobile: req.body.mobile,
            postedBy: req.body.postedBy,
            saleType: req.body.saleType,
            featuredPackage: req.body.featuredPackage,
            ppdPackage: req.body.ppdPackage,
            email: req.body.email,
            city: req.body.city,
            area: req.body.area,
            pincode: req.body.pincode,
            address: req.body.address,
            landmark: req.body.landmark,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            PPDId: PPDId,
            Views: Views,
            DaysLeft: DaysLeft,
            status: "Unsold"
        })
        res.status(200).json({
            message: "success",
            asset
        })
    } catch (e) {
        console.log(e.message)
        res.status(400).json({
            message: e.message

        })
    }
})

module.exports = router;
