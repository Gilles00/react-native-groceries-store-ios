import { Svg } from "expo";
import React, { PureComponent } from "react";
import colors from "../../../constants/colors";
import tabBarIcon from "../../../shared/TabBarIcon";

class CategoriesIcon extends PureComponent {
  static defaultProps = {
    fillColor: colors.icon
  };
  render() {
    const { fillColor } = this.props;
    return (
      <Svg width={24} height={24} viewBox="0 0 24 24" fill={fillColor}>
        <Svg.Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 2C2.44772 2 2 2.44772 2 3V10C2 10.5523 2.44772 11 3 11H10C10.5523 11 11 10.5523 11 10V3C11 2.44772 10.5523 2 10 2H3ZM4 9V4H9V9H4ZM14 2C13.4477 2 13 2.44772 13 3V10C13 10.5523 13.4477 11 14 11H21C21.5523 11 22 10.5523 22 10V3C22 2.44772 21.5523 2 21 2H14ZM15 9V4H20V9H15ZM13 14C13 13.4477 13.4477 13 14 13H21C21.5523 13 22 13.4477 22 14V21C22 21.5523 21.5523 22 21 22H14C13.4477 22 13 21.5523 13 21V14ZM15 15V20H20V15H15ZM3 13C2.44772 13 2 13.4477 2 14V21C2 21.5523 2.44772 22 3 22H10C10.5523 22 11 21.5523 11 21V14C11 13.4477 10.5523 13 10 13H3ZM4 20V15H9V20H4Z"
        />
      </Svg>
    );
  }
}

export default tabBarIcon(CategoriesIcon);