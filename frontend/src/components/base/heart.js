import React, { Component } from "react"
import { IconContext } from "react-icons";
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';

export default class Heart extends Component {
  state = {
    hover: false,
    selected: false
  };

  render = () => (
    <IconContext.Provider value={{ size: '4em', className: "icon", color: this.state.hover || this.state.selected ? "red" : "" }}>
      <div onMouseEnter={ () => this.setState({hover: true}) }
           onMouseLeave={ () => this.setState({hover: false}) }
           onClick={() => this.setState({selected: ! this.state.selected}) }
           className="clickable">
        { this.state.hover || this.state.selected ? <IoIosHeart /> : <IoIosHeartEmpty /> }
      </div>
    </IconContext.Provider>
  );
}