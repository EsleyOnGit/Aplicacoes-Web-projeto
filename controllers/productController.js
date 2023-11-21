//create main model
const Product = db.products
const Review = db.reviews

//main work

// 1. create product
const addProduct = async(req, res) =>{
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }

    const product = await Product.create(info)
    res.status(200).send(product)
}

//2. get all products
const getAllProducts = async(req, res) =>{
    let product = await Product.findAll({
    })
    res.status(200).send(product)
}

// 3. single product
const getOneProduct = async (req, res)=>{
    let id = req.params.id
    let product = await Product.findOne({ where: {id: id}})
    res.status(200).send(product)
}

// 4. update Product
const updateProduct = async (req, res) =>{
    let id = req.params.id

    const product = await Product.update(req.body, { where: {id: id}})
    res.status(200).send(product)
}

//5. Delete product by id
const deleteProduct = async (req, res) =>{
    let id = req.params.id

    await Product.destroy({ where: {id: id}})
    res.status(200).send('O produto foi deletado!')
}

//6. get published product
const getPublishedProduct = async (req, res) =>{
    
    const product = await Product.findAll({ where: {published: true}})
    res.status(200).send(product)
}

//7. conetar um para muitos ralação product e reviews
const getProductReviews = async (req, res) =>{
    const data = await Product.findAll({
        include:[{
            model: Review,
            as: 'review'
        }],
        where: {id: 2}
    })

    res.status(200).send(data)
}

module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getPublishedProduct,
    getProductReviews
}