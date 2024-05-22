// import { Component } from "react";

import Card from "../card/card.component";

import "./card-list.styles.css";

// CLASS COMPONENT

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster}></Card>;
    })}
  </div>
);

// CLASS COMPONENT

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <Card monster={monster}></Card>;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
