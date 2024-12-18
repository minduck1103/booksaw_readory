const Product = require("../models/ProductModel")

const createProduct = (newProduct) =>{
    return new Promise(async(resolve, reject) =>{
        const {name, image, type, price, countInStock,description,rating } = newProduct

        try{
            const checkProduct = await Product.findOne({
                name: name
            })
            if(checkProduct !== null){
                resolve({
                    status: 'OK',
                    message: 'The name of product already'
                })
            }
            const createdProduct = await Product.create({
                name, 
                image, 
                type, 
                price, 
                countInStock,
                description,
                rating
            })
            if(createdProduct){
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: createdProduct
                })
            }
        }catch (e){
            reject(e)
        }
    })
}

const updateProduct = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkProduct = await Product.findById(id);
            if (checkProduct === null) {
                return resolve({
                    status: 'ERR',
                    message: 'The Product is not defined'
                })
            }

            const updatedProduct = await Product.findByIdAndUpdate(id, data, { new: true })
            console.log('updatedProduct', updatedProduct);
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedProduct
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteProduct = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkProduct = await Product.findById(id);
            if (checkProduct === null) {
                return resolve({
                    status: 'ERR',
                    message: 'The Product is not defined'
                })
            }
            resolve({
                status: 'OK',
                message: 'Delete Product success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllProduct = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalProduct = await Product.countDocuments(); // Đếm tổng số sản phẩm
            const objectSort = {};
            const objectFilter = {};

            // Xử lý `sort`
            if (Array.isArray(sort) && sort.length === 2) {
                objectSort[sort[1]] = sort[0] === 'desc' ? -1 : 1;
            } else if (typeof sort === 'string') {
                objectSort['name'] = sort === 'desc' ? -1 : 1;
            } else {
                console.log('Sort không hợp lệ:', sort);
            }

            // Xử lý `filter`
            if (filter) {
                if (typeof filter === 'string') {
                    // Trường hợp filter là chuỗi phân cách "key:value,key:value"
                    const filters = filter.split(','); // Tách các cặp key:value
                    filters.forEach((item) => {
                        const [key, value] = item.split(':'); // Tách key và value
                        if (key && value) {
                            objectFilter[key] = value; // Gán vào objectFilter
                        }
                    });
                } else if (typeof filter === 'object') {
                    // Trường hợp filter là một object (JSON đã parse)
                    Object.assign(objectFilter, filter); // Gán thẳng vào objectFilter
                } else {
                    console.log('Filter không hợp lệ:', filter);
                }
            }

            // Truy vấn MongoDB
            const allProduct = await Product.find(objectFilter) // Áp dụng filter
                .limit(limit)
                .skip(page * limit)
                .sort(objectSort); // Áp dụng sort

            // Không tìm thấy sản phẩm
            if (allProduct.length === 0) {
                return resolve({
                    status: 'OK',
                    message: 'No products found',
                    data: [],
                    total: totalProduct,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalProduct / limit),
                });
            }

            // Kết quả thành công
            resolve({
                status: 'OK',
                message: 'Get all Product success',
                data: allProduct,
                total: totalProduct,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalProduct / limit),
            });
        } catch (e) {
            console.error('Lỗi khi lấy sản phẩm:', e);
            reject(e);
        }
    });
};


const getDetailsProduct = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const product = await Product.findById(id);
            if (product === null) {
                return resolve({
                    status: 'ERR',
                    message: 'The Product is not defined'
                })
            }
            resolve({
                status: 'OK',
                message: 'Get details Product success',
                data: product
            })
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createProduct,
    updateProduct,
    getDetailsProduct,
    deleteProduct,
    getAllProduct
}