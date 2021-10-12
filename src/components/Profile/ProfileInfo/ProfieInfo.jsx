import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <>
      <img className={classes.image} src="https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2159024400&v=beta&t=4WV9YKR9L3PAEnppWmPPMk5xVnETtWvhZN8NexEzPwM" />
      <div>
        <img width='200' height='200' src='https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg' />
        <div>description</div>
      </div>
    </>
  )
}

export default ProfileInfo