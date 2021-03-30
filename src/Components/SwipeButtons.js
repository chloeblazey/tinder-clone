import React from 'react'
import '../Styles/SwipeButtons.css'
import FavoriteIcon from '@material-ui/icons/Favorite'
import CloseIcon from '@material-ui/icons/Close'
import ReplayIcon from '@material-ui/icons/Replay'
import StarRateIcon from '@material-ui/icons/StarRate'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import IconButton from '@material-ui/core/IconButton'


function SwipeButtons(props) {

  return (
    <div className='swipeButtons'>
      <IconButton className="swipeButtons__repeat">
          <ReplayIcon fontSize='large' />
      </IconButton>
      <IconButton
        className='swipeButtons__left'
        onClick={() => props.clickHandler('left')}
      >
        <CloseIcon fontSize='large' />
      </IconButton>
      <IconButton className='swipeButtons__star'>
        <StarRateIcon fontSize='large' />
      </IconButton>
      <IconButton 
        className='swipeButtons__right'
        onClick={() => props.clickHandler('right')}
      >
        <FavoriteIcon fontSize='large' />
      </IconButton>
      <IconButton className='swipeButtons__lightning'>
        <FlashOnIcon fontSize='large' />
      </IconButton>
    </div>
  )
}

export default SwipeButtons
