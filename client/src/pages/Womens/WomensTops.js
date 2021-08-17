import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/Info';
import itemData from './itemData';
import './Womens.css';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // 
    // background: '#b376558f',
    
    // overflow: 'hidden',
    
  },
  imageList: {
    width: 800,
    display: 'flex',
    alignSelf: 'center',
    padding: '2rem',
    overflow: 'scroll',
    
    // height: 650,
    // Promote the list into its own layer in Chrome. This cost memory, but helps keep FPS high.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const itemData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     featured: true,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function Womenstops() {
  const classes = useStyles();

  return (
    <div className="wtopsPage">
    <div className={classes.root} id="tops">
      <ImageList rowHeight={500} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
          <h3>Women's Tops</h3>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>{item.price} <br /> {item.description}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
    </div>
  );
}