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

function imgTLink(){
  window.location.href='/mens-tops';
};

function imgBotLink() {
  window.location.href='/mens-bots';
}

// 

export default function Mens(props) {

      const classes = useStyles();

  return (
    <div className="mensMain">
        
        <div className="mensMainCont">
      <Card className="mensCard" style={{backgroundColor: '#fbf9ec'}}>
        <CardImg onClick={() => imgTLink()} src={MensT} alt="Card image cap"></CardImg>
        <CardBody>
          <CardTitle className="mensTit" tag="h5">Men's Tops</CardTitle>
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
          <CardTitle className="mensTit" tag="h5">Men's Bottom</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <MatButt href="/mens-bots" color="primary">
        Link
      </MatButt>
          <CardText>
            <small className="text-muted">More Text</small>
          </CardText>
        </CardBody>
        <CardImg onClick={() => imgBotLink()} className="crd" src={MensBot} alt="Card image cap" />
      </Card>
      </div>
    </div>
  );
};

