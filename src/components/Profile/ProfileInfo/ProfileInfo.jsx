import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import defaultAvatar from './../../../assets/images/images.png'

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />;
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                {props.profile.photos.large 
                    ? <img src={ props.profile.photos.large } />
                    : <img src={defaultAvatar} /> 
                }
                <ProfileStatus {...props} status={props.status} />
            </div>
        </div>
    )
}

export default ProfileInfo;