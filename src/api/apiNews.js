import axios from "axios"

// Конструкция import.meta.env позволяет получить значение переменной окружения.
const BASE_URL=import.meta.env.VITE_NEWS_BASE_API_URL
const API_KEY=import.meta.env.VITE_NEWS_API_KEY

export const getNews =  async ({page_number = 1, page_size = 10, category, keywords}) => {
    try {
        const response = await axios.get(`${BASE_URL}search`, {
            params:{ 
                apiKey: API_KEY,
                page_number,
                page_size,
                category,
                keywords,
            },
        });
        return response.data
    } catch (error) {
        console.log('Не удалось получить новости:', error)
    }
}


export const getCaterories =  async () => {
    try {
        const response = await axios.get(`${BASE_URL}available/categories`, {
            params:{ 
                apiKey: API_KEY,
            },
        });
        return response.data
    } catch (error) {
        console.log('Не удалось получить Категории новостей:', error)
    }
}