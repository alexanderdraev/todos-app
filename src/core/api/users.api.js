import axios from  'axios';

const apiUrl = 'http://localhost:3005';

export function getLoggedUser(){
    return JSON.parse(localStorage.getItem('loggedUser'));
}

export function getAllUsers() {
    return axios.get(`${apiUrl}/users`);
}

export function getUserById(id) {
    return axios.get(`${apiUrl}/users/${id}`);
}

export async function login(userData){
    const users = (await getAllUsers()).data;

    const loggedUser = users.find(u=> u.email === userData.email && u.password.toString() === userData.password);

    if(loggedUser){
        localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
        return;
    }

    throw new Error('Incorrect username or password');
}