import { data } from '../data/index'

export const getAllProducts = () => {
    const product = data.products
    return product
}

export const getProductByCategoryId = (idCategory: number) => {
    const products = data.products.filter(item => item.idCategory == idCategory)
    return products
}

export const getProductById = (id: number) => {
    const product = data.products.find(item => item.id == id)
    return product
}