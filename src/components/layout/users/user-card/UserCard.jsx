import React from 'react';
import './UserCard.css';
import { Link } from 'react-router-dom';
import { getLoggedUser } from '../../../../core/api/users.api';

const cardStyle = {
    width: '15rem'
}

export function UserCard({ user, onDelete }) {
    const loggedUser = getLoggedUser();

    return (
        <div className="card m-2" style={cardStyle}>
            <img src={user.picture} alt={user.name} />
            <div className="card-body">
                <h5 className="card-title"><Link to={`/users/${user.id}`}>{user.name}</Link></h5>
            </div>
            <ul className="list-group list-groupS-flush">
                <li className="list-group-item">Age: {user.age}</li>
                <li className="list-group-item">Email: {user.email}</li>
            </ul>
            <div className="card-body">
                {loggedUser.isAdmin && <Link className="cursor-pointer btn btn-outline-success mr-1" to={`/users/edit/${user.id}`}>Edit</Link>}
                {loggedUser.isAdmin && <div className="cursor-pointer btn btn-outline-danger" onClick={() => onDelete(user.id)}>Delete</div>}            </div>
        </div>
    );
}
