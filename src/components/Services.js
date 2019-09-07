    
import React, { Component } from "react";
import { FaCocktail, FaDice, FaShuttleVan, FaSpa } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "World class service and free cocktails while playing your favorite games"
      },
      {
        icon: <FaDice />,
        title: "World Class Casinos",
        info:
          "Top tier casino games including jackpot slots, dice, 21, and more!"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Complimentary shuttle service from Mccarran International Airport to the resort of your choice"
      },
      {
        icon: <FaSpa />,
        title: "Luxury Spa",
        info:
          "Need a spa date? Enjoy our luxury spa packages"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}