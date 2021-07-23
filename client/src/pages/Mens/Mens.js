import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import MensT from "../../images/fourthDimMensT.jpeg";
import MensBot from'../../images/fthBottom.jpeg';
import { makeStyles } from '@material-ui/core/styles';
import MatButt from '@material-ui/core/Button';
import './Mens.css';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export default function Mens(props) {

      const classes = useStyles();

  return (
    <div className="mensMain">
        
        <div className="mensMainCont">
      <Card className="mensCard" style={{backgroundColor: '#fbf9ec'}}>
        <CardImg className="crd" src={MensT} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Men's Tops</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <MatButt href="/mens-tops" color="primary">
        Link
      </MatButt>
          <CardText>
            <small className="text-muted">More Text</small>
          </CardText>
        </CardBody>
      </Card>
     <br />
    <br />
      <Card className="mensCard" style={{backgroundColor: '#fbf9ec'}}>
        <CardBody>
          <CardTitle tag="h5">Men's Bottom</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <MatButt href="/mens-bots" color="primary">
        Link
      </MatButt>
          <CardText>
            <small className="text-muted">More Text</small>
          </CardText>
        </CardBody>
        <CardImg className="crd" src={MensBot} alt="Card image cap" />
      </Card>
      </div>
    </div>
  );
};

