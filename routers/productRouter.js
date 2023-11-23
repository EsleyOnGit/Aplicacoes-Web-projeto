const productController = require('../controllers/productController.js')
const reviewController = require('../controllers/reviewController.js')

//Routers
const router = require('express').Router()

router.post('/addProduct', productController.addProduct)

router.get('/allProduct', productController.getAllProducts)

router.post('/publishedProduct', productController.getPublishedProduct)

//Reviews e controllers
router.post('/addReview', reviewController.addReview)
router.get('/allReview/:id', reviewController.getAllReviews)

// get product Reviews
router.get('/getProductReviews/:id', productController.getProductReviews)
router.get('/:id', productController.getOneProduct)

// product router
router.put('/:id', productController.updateProduct)

router.delete('/:id', productController.deleteProduct)

module.exports = router