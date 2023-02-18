import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import styles from './MouseOverPopover.module.css';

export default function MouseOverPopover(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  // Записываем в local storage переменную для первичной демонстрации подсказки
  useEffect(() => {
    const reponse = JSON.parse(localStorage.getItem('showPopover'));
    if (reponse === null) {
      console.log(`reponse ${reponse}`);
      localStorage.setItem('showPopover', JSON.stringify(isFirstVisit));
    } else {
      setIsFirstVisit(false);
      localStorage.setItem('showPopover', JSON.stringify(isFirstVisit));
    }
  }, [isFirstVisit]);

  // useEffect(() => {
  //   const reponse = JSON.parse(localStorage.getItem('showPopover'));
  //   if (reponse) {
  //     setIsFirstVisit(isFirstVisit);
  //   }
  // }, []);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const [showPopUp, setShowPopUp] = useState(false);

  const showPopupHandler = () => {
    setShowPopUp(true);
    setTimeout(() => {
      setIsFirstVisit(false);
    }, 7000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopUp(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, [showPopUp]);

  let popup = null;

  if (showPopUp && isFirstVisit) {
    popup = (
      <Popover
        id='mouse-over-popover'
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 2 }}>
          Для того чтобы показать ответ, кликните по карточке
        </Typography>
      </Popover>
    );
  }

  return (
    <>
      <Typography
        component={'div'}
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup='true'
        onMouseEnter={handlePopoverOpen}
      >
        {popup}
        <div
          onMouseOver={showPopupHandler}
          className={styles.wrapper_popover_children}
        >
          {props.children}
        </div>
      </Typography>
    </>
  );
}
