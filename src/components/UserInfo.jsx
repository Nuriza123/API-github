import React from 'react';
import { Card } from 'react-bootstrap';

const UserInfo = ({ user }) => { // Убираем типизацию
  const { login, email, followers, followings, avatar_url, public_repos } = user; // Извлечение данных из user

  return (
    <div className="user-info-container">
      <Card className="user-info-card" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={avatar_url} />
        <Card.Body>
          <Card.Title className="user-name">{login}</Card.Title>
          <ul className="user-info-list">
            {email && <li>Email: {email}</li>}
            <li>Followers: {followers}</li>
            <li>Followings: {followings}</li>
            <li>Public Repos: {public_repos}</li>
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserInfo;
