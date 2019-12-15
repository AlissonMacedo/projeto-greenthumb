import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import api from '../../services/api';

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


export default function PaginaList() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    async function loadPlants() {
      const response = await api.get()
      setProducts(response.data);
    };
    loadPlants()
  }, [])

  console.log(products)

  function sun(nivel) {
    const state = nivel;

    switch (state) {
      case "high":
        return <img src={highSun} /> ;
      case "low":
        return <img src={lowSun} />;
      case "no":
        return <img src={noAnswer} />;
         }
  };

  function water(nivel) {
    const state = nivel;

    switch (state) {
      case "rarely":
        return <img src={oneDrop} /> ;
      case "regularly":
        return <img src={twoDrops} />;
      case "daily":
        return <img src={threeDrops} />;
         }
  };

  return (
    <> 
      <Master>
        <LogoLeft />
        <Container>
        <Header image={pick} text="Our picks for you" />
        <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.url}/>
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
            <button type="button">buy now</button>
          </li>
          ))}
      </ProductList>
        </Container>
      </Master>


    </>
  );
}
