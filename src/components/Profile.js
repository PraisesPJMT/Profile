import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsis,
} from '@fortawesome/free-solid-svg-icons';
import ProfilePicture from '../assets/Profile Picture.jpeg';
import Camera from '../assets/camera.svg';
import '../styles/Profile.css';

const Profile = () => (
  <section className="profile-section">
    <h1 className="profile-title">Praises Tula</h1>
    <div className="profile-pic-wrapper">
      <img className="profile-image" src={ProfilePicture} alt="Praises Tula" />
      <div className="profile-pic-overlay">
        <img className="camera-icon" src={Camera} alt="Camera" />
      </div>
    </div>
    <button type="button" className="btn-more">
      <FontAwesomeIcon
        className="dots"
        icon={faEllipsis}
      />
    </button>
  </section>
);

export default Profile;
