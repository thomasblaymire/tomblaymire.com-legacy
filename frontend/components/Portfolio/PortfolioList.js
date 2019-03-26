import React, { Component } from "react";
import styled from "styled-components";
import PortfolioItem from "./PortfolioItem";
import productAnalysis from "../../static/port-pad.jpg";
import gpWeb from "../../static/port-gpws.jpg";
import careers from "../../static/port-careers.jpg";
import innovation from "../../static/port-innovation-main.png";
import hermes from "../../static/hermes-main.jpg";
import location from "../../static/port-location.jpg";

const PortfolioItems = styled.div``;

class PortfolioList extends Component {
  state = {
    portfolioItems: [
      {
        id: 1,
        image: innovation,
        name: "Hermes Innovation",
        tags: ["Angular JS", "HTML5", "CSS3", "Jasmine"],
        url: "/portfolio-innovation"
      },
      {
        id: 2,
        image: productAnalysis,
        name: "Product Analysis Dashboard",
        tags: ["React", "Redux", "Styled Components", "Jest"],
        url: "/portfolio-pad"
      },
      {
        id: 3,
        image: careers,
        name: "Hermes Careers",
        tags: ["Angular 2", "ES6", "CSS3", "Web Development"],
        url: "/portfolio-careers"
      },
      {
        id: 4,
        image: hermes,
        name: "Hermes",
        tags: ["Angular 2", "ES6", "CSS3", "Web Development"],
        url: "/portfolio-hermes"
      },
      {
        id: 5,
        image: gpWeb,
        name: "GP Web Solutions",
        tags: ["React", "CSS3", "Web Development", "JavaScript"],
        url: "/portfolio-gpws"
      },
      {
        id: 6,
        image: location,
        name: "Location Search",
        tags: ["React", "Redux", "ES6", "JavaScript"],
        url: "/portfolio"
      }
    ]
  };

  render() {
    const portfolioItems = this.state.portfolioItems
      .slice(0, this.props.amount)
      .map(item => (
        <PortfolioItem
          customStyle={this.props.customStyle}
          key={item.id}
          image={item.image}
          url={item.url}
          id={item.id}
          name={item.name}
          tags={item.tags}
        />
      ));

    return <PortfolioItems>{portfolioItems}</PortfolioItems>;
  }
}

export default PortfolioList;
