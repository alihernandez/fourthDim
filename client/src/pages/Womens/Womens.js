import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import womensT from "../../images/Womens.jpeg";
import womensBot from'../../images/WomensBot.jpeg';
import { makeStyles } from '@material-ui/core/styles';
import MatButt from '@material-ui/core/Button';
import './Womens.css';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export default function Womens(props) {

      const classes = useStyles();

  return (
    <div className="womensMain">

      
        
        <div className="womensMainCont">
          
      <Card className="crdBod" style={{backgroundColor: '#fbf9ec'}}>
        <CardImg className="crd" src={womensT} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Women's Tops</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <MatButt href="/womens-tops" color="primary">
        Link
      </MatButt>
          <CardText>
            <small className="text-muted">More Text</small>
          </CardText>
        </CardBody>
      </Card>
     <br />
    <br />
      <Card className="crdBod" style={{backgroundColor: '#fbf9ec'}}>
        <CardBody>
          <CardTitle tag="h5">Women's Bottom</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <MatButt href="/womens-bots" color="primary">
        Link
      </MatButt>
          <CardText>
            <small className="text-muted">More Text</small>
          </CardText>
        </CardBody>
        <CardImg className="crd" src={womensBot} alt="Card image cap" />
      </Card>
      </div>
    </div>
  );
};

