const ProductService = require('../services/ProductService')

const createProduct = async (req,res) =>{
    try{
        const {name, image, type, price, countInStock,description,rating } = req.body
        if (!name || !image || !type || !price || !countInStock || !rating ) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await ProductService.createProduct(req.body);
        return res.status(200).json(response);
    }catch(e){
        return res.status(404).json({
            message: e
    })
    }
}

const updateProduct = async (req,res) =>{
    try{
        const productID = req.params.id
        const data = req.body
        if(!productID){
            return res.status(200).json({
                status:'ERR',
                message: 'The productID is required'
            })
        }
        console.log('productID',productID)
        const response = await ProductService.updateProduct(productID,data);
        return res.status(200).json(response);
    }catch(e){
        return res.status(404).json({
            message: e
    })
    }
}

const getDetailsProduct = async (req,res) =>{
    try{
        const ProductID = req.params.id
        if(!ProductID){
            return res.status(200).json({
                status:'ERR',
                message: 'The ProductID is required'
            })
        }
        console.log('ProductID',ProductID)
        const response = await ProductService.getDetailsProduct(ProductID);
        return res.status(200).json(response);
    }catch(e){
        return res.status(404).json({
            message: e
    })
    }
}

const deleteProduct = async (req,res) =>{
    try{
        const ProductID = req.params.id
        if(!ProductID){
            return res.status(200).json({
                status:'ERR',
                message: 'The ProductID is required'
            })
        }
        console.log('ProductID',ProductID)
        const response = await ProductService.deleteProduct(ProductID);
        return res.status(200).json(response);
    }catch(e){
        return res.status(404).json({
            message: e
    })
    }
}

const getAllProduct = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query;

        // Chuyển filter thành JSON object nếu cần thiết
        let parsedFilter = filter;
        try {
            if (typeof filter === 'string') {
                parsedFilter = JSON.parse(filter);
            }
        } catch (err) {
            console.warn('Không thể parse filter:', filter);
        }

        const response = await ProductService.getAllProduct(
            Number(limit) || 8,
            Number(page) || 0,
            sort,
            parsedFilter
        );

        return res.status(200).json(response);
    } catch (e) {
        console.error('Lỗi khi lấy danh sách sản phẩm:', e);
        return res.status(500).json({
            status: 'ERR',
            message: 'Internal server error',
        });
    }
};


module.exports = {
    createProduct,
    updateProduct,
    getDetailsProduct,
    deleteProduct,
    getAllProduct
}