const productController = require('../controllers/productController.js')
const reviewController = require('../controllers/reviewController.js')

//Routers
const router = require('express').Router()

router.post('/addProduct', productController.addProduct)

router.get('/allProduct', productController.getAllProducts)

router.post('/publishedProduct', productController.getPublishedProduct)

// get product Reviews
router.get('/getProductReviews/:id', productController.getProductReviews)



//Reviews e controllers
router.post('/addReview', reviewController.addReview)
router.get('/allReview', reviewController.getAllReviews)


router.post('/:id', productController.getOneProduct)

router.post('/:id', productController.updateProduct)

router.post('/:id', productController.deleteProduct)

module.exports = router