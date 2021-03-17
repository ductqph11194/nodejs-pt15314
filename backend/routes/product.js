import express from 'express';

const router = express.Router();

router.get('/product', (req, res) => {
    console.log('product list');
    res.json(
        { message: "hello" }
    )
})

module.exports = router;