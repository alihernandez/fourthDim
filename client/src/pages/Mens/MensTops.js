import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import itemData from './itemData';
import './Mens.css';

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
export default function Menstops() {
  const classes = useStyles();

  return (
    <div className="topsPage">
    <div className={classes.root} id="mensTops">
        <div>
            <h1>Men's Tops</h1>
        </div>
      <ImageList rowHeight={200} gap={15} cols={4} className={classes.imageList} id="imgList">
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.featured ? 3 : 1} rows={item.featured ? 2 : 1}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              position="top"
              actionIcon={
                <IconButton aria-label={`star ${item.title}`} className={classes.icon}>
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
    </div>
  );
}