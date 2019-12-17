import React, { useState, useEffect } from "react";

import PropType from "prop-types";

import { Form, Input } from "@rocketseat/unform";

import { Master, Container, DivPlant } from "./styles";

import { Link } from "react-router-dom";
import api from "../../services/api";

import highSun from "../../assets/icons/coral/high-sun.svg";
import lowSun from "../../assets/icons/coral/low-sun.svg";
import noAnswer from "../../assets/icons/coral/no-answer.svg";

import oneDrop from "../../assets/icons/green/one-drop.svg";
import twoDrops from "../../assets/icons/green/two-drops.svg";
import threeDrops from "../../assets/icons/green/three-drops.svg";

import pet from "../../assets/icons/grey/pet.svg";
import toxic from "../../assets/icons/grey/toxic.svg";

import LogoLeft from "../../components/LogoLeft";

import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatório."),
  email: Yup.string()
    .email("Email inválido!")
    .required("E-mail é obrigatório")
});

export default function PaginaPlant(props) {
  const [plant, setPlant] = useState(props.location.state);

  console.log(plant);

  function sun(nivel) {
    const state = nivel;

    // eslint-disable-next-line default-case
    switch (state) {
      case "high":
        return (
          <div>
            <img src={highSun} />
            <span>High sunlight</span>
          </div>
        );
      case "low":
        return (
          <div>
            <img src={lowSun} />
            <span>Low sunlight</span>
          </div>
        );
      case "no":
        return (
          <div>
            <img src={noAnswer} />
            <span>No sunlight</span>
          </div>
        );
    }
  }

  function water(nivel) {
    const state = nivel;

    // eslint-disable-next-line default-case
    switch (state) {
      case "rarely":
        return (
          <div>
            <img src={oneDrop} />
            <span>Water rarely</span>
          </div>
        );
      case "regularly":
        return (
          <div>
            <img src={twoDrops} />
            <span>Water regularly </span>
          </div>
        );
      case "daily":
        return (
          <div>
            <img src={threeDrops} />
            <span>Water daily</span>
          </div>
        );
    }
  }

  function pet(nivel) {
    const state = nivel;

    switch (state) {
      case true:
        return (
          <div>
            <img src={pet} />
            <span>Beware! Toxic for pets</span>
          </div>
        );
      case false:
        return (
          <div>
            <img src={toxic} />
            <span>Non-toxic for pets</span>
          </div>
        );
    }
  }

  async function handleSubmit({ email, name }) {
    const response = await api.post("", {
      name: name,
      email: email,
      id: plant.id
    });
    console.log(response);
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
            <Form schema={schema} onSubmit={handleSubmit}>
              <h1>Nice pick!</h1>
              <h2>
                Tell us your name and e-mail and we will get in touch regarding
                your order ;)
              </h2>
              <div>
                <h2>Name</h2>
                <Input name="name" placeholder="Crazy Plant Person" />
                <h2>E-mail</h2>
                <Input name="email" placeholder="plantperson@email.com" />
              </div>
              <button type="submit">send</button>
              {/* <Link to={{ pathname: "/paginaThank", state: plant }}>
                <button>send</button>
              </Link> */}
            </Form>
          </div>
        </Container>
      </Master>
    </>
  );
}
