/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable default-case */
import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import api from "../../services/api";

import { connect } from "react-redux";

import Header from "../../components/Header";
import pick from "../../assets/illustrations/pick.png";
import LogoLeft from "../../components/LogoLeft";

import { ProductList, Container, Master, DivText, DivImage } from "./styles";

import highSun from "../../assets/icons/coral/high-sun.svg";
import lowSun from "../../assets/icons/coral/low-sun.svg";
import noAnswer from "../../assets/icons/coral/no-answer.svg";

import oneDrop from "../../assets/icons/green/one-drop.svg";
import twoDrops from "../../assets/icons/green/two-drops.svg";
import threeDrops from "../../assets/icons/green/three-drops.svg";

function PaginaList({ questions }) {
  const [products, setProducts] = useState([]);
  const [sunapi, setSunApi] = useState(questions.sun.sun);
  const [waterapi, setWaterApi] = useState(questions.water.water);
  const [petapi, setPetApi] = useState(questions.pet.pet);

  // useEffect(() => {
  //   async function loadConst() {
  //     setSunApi("high");
  //     setWaterApi("rarely");
  //     setPetApi("false");
  //   }
  //   loadConst();
  // }, []);

  // `front-plantTest-service?sun=high&water=rarely&pets=false`
  useEffect(() => {
    async function loadPlants() {
      const response = await api.get(
        `front-plantTest-service?sun=${sunapi}&water=${waterapi}&pets=${petapi}`
      );
      setProducts(response.data);
    }
    loadPlants();
  }, [petapi, sunapi, waterapi]);

  console.log(questions);

  function sun(nivel) {
    const state = nivel;

    switch (state) {
      case "high":
        return <img src={highSun} />;
      case "low":
        return <img src={lowSun} />;
      case "no":
        return <img src={noAnswer} />;
    }
  }

  function water(nivel) {
    const state = nivel;

    switch (state) {
      case "rarely":
        return <img src={oneDrop} />;
      case "regularly":
        return <img src={twoDrops} />;
      case "daily":
        return <img src={threeDrops} />;
    }
  }

  return (
    <>
      <Master>
        <LogoLeft active={true} />
        <Container>
          <Header image={pick} text="Our picks for you" />
          <ProductList>
            {products.map(product => (
              <li key={product.id}>
                <img src={product.url} />
                <div>
                  <DivText>
                    <strong>{product.name}</strong>
                    <span>${product.price}</span>
                  </DivText>
                  <DivImage>
                    {sun(product.sun)}
                    {water(product.water)}
                  </DivImage>
                </div>
                <Link to={{ pathname: "/paginaPlant", state: product }}>
                  <button type="button">buy now</button>
                </Link>
              </li>
            ))}
          </ProductList>
        </Container>
      </Master>
    </>
  );
}

export default connect(state => ({
  questions: state.questions
}))(PaginaList);
