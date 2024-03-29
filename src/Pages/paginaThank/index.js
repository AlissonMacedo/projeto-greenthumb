/* eslint-disable default-case */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';

import PropType from 'prop-types';

import {Master, Container, DivPlant } from './styles';

import envelop from "../../assets/illustrations/envelop.png"


import highSun from "../../assets/icons/coral/high-sun.svg";
import lowSun from "../../assets/icons/coral/low-sun.svg";
import noAnswer from "../../assets/icons/coral/no-answer.svg";

import oneDrop from "../../assets/icons/green/one-drop.svg";
import twoDrops from "../../assets/icons/green/two-drops.svg";
import threeDrops from "../../assets/icons/green/three-drops.svg";

import pet from "../../assets/icons/grey/pet.svg";
import toxic from "../../assets/icons/grey/toxic.svg";

import LogoLeft from "../../components/LogoLeft";


export default function PaginaThank(props) {
  const [plant, setPlant] = useState(props.location.state);


  console.log(plant);

  function sun(nivel) {
    const state = nivel;

    // eslint-disable-next-line default-case
    switch (state) {
      case "high":
        return <div>
          <img src={highSun} />
          <span>High sunlight</span>
        </div> ;
      case "low":
        return <div>
          <img src={lowSun} />
          <span>Low sunlight</span>
        </div>;
      case "no":
        return <div>
          <img src={noAnswer} />
          <span>No sunlight</span>
        </div>;
         }
  };

  function water(nivel) {
    const state = nivel;

    // eslint-disable-next-line default-case
    switch (state) {
      case "rarely":
        return <div>
          <img src={oneDrop} />
          <span>Water rarely</span>
        </div> ;
      case "regularly":
        return <div>
          <img src={twoDrops} />
          <span>Water regularly </span>
        </div>;
      case "daily":
        return <div>
          <img src={threeDrops} />
          <span>Water daily</span>
        </div>;
         }
  };

  function pet(nivel) {
    const state = nivel;

    switch (state) {
      case true:
        return <div>
          <img src={pet} />
          <span>Beware! Toxic for pets</span>
        </div> ;
      case false:
        return <div>
          <img src={toxic} />
          <span>Non-toxic for pets</span>
        </div>;
    };
  }
 
  return (
    <>
          <Master>
        <LogoLeft active={true} white={true} />
        <Container>
        <DivPlant>
          <h1>{plant.name}</h1>
          <h2>${plant.price}</h2> 
          <img src={plant.url} />

          {sun(plant.sun)}
          {water(plant.water)}
          {pet(plant.toxicity)}

        </DivPlant>
        <div>
          <form>
            <h1>Thank you!</h1>
            <h2>You will hear from us soon. Please check your e-mail!</h2>
            <img src={envelop} />
          </form>
        </div>

        </Container>
      </Master>

    </>

  )
  }; 