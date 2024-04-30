import axios from 'axios';

const BASE_URL = "http://localhost:3000/api"

async function register(name, email, password) {
    try {
        // console.log(name, email, password, "<<<<");
        const res = await axios.post(`${BASE_URL}/register`, {
            name,
            email,
            password
        })
        if (res.status === 200) {
            console.log(res.data.token);
            return res.data.token;
        }
        else {
            return null;
        }
    } catch (e) {
        console.log("Error:", e)
        return null;
    }
}

async function login(email, password) {
    try {
        const res = await axios.post(`${BASE_URL}/login`, {
            email,
            password
        })
        if (res.status === 200) {
            return res.data.accessToken;
        }
        else {
            return null;
        }
    } catch (e) {
        console.log("Error:", e)
        return null;
    }
}

async function createBook(formData) {
    try {
        const token = localStorage.getItem("accessToken");
        const response = await axios.post(`${BASE_URL}/books`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        return null;
    }
}

async function getAllBooks() {
    try {
        const res = await axios.get(`${BASE_URL}/books`)
        if (res.status === 200) {
            return res.data;
        }
        else {
            return null;
        }
    } catch (e) {
        console.log("Error:", e)
        return null;
    }
}

async function editBook(id, title, author, publisher, year, pages) {
    try {
        const token = localStorage.getItem("token");
        const requestBody = {
            id,
            title,
            author,
            publisher,
            year,
            pages
          };
        const res = await axios.put(`${BASE_URL}/books/${id}`, requestBody, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        if (res.status === 200) {
            console.log(res.data);
            return res.data;
        }
        else {
            return null;
        }
    } catch (e) {
        console.log("Error:", e)
        return null;
    }
}

async function getBookDetail(id) {
    try {
        const res = await axios.get(`${BASE_URL}/books/${id}`)
        if (res.status === 200) {
            return res.data;
        }
        else {
            return null;
        }
    } catch (e) {
        console.log("Error:", e)
        return null;
    }
}


async function deleteBook(id) {
    try {
        const token = localStorage.getItem("token");
        const res = await axios.delete(`${BASE_URL}/books/${id}`, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        if (res.status === 200) {
            return res.data;
        }
        else {
            return null;
        }
    } catch (e) {
        console.log("Error:", e)
        return null;
    }
}

export {
    register,
    login,
    createBook,
    getAllBooks,
    editBook,
    deleteBook,
    getBookDetail
}
