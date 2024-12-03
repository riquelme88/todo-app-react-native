import { data } from '../data/index'


export const getAllCategories = () => {
    const category = data.categories
    return category
}

export const getCategoryById = (id: number) => {
    const category = data.categories.find(i => i.id == id)

    return category
}