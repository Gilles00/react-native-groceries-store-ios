import React, { PureComponent } from "react";
import { Svg } from "expo";

class HelpIcon extends PureComponent {
  render() {
    return (
      <Svg viewBox="0 0 24 24" {...this.props}>
        <Svg.Path d="M12 17.5C11.4477 17.5 11 17.9477 11 18.5C11 19.0523 11.4477 19.5 12 19.5C12.5523 19.5 13 19.0523 13 18.5C13 17.9477 12.5523 17.5 12 17.5Z" />
        <Svg.Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 12.5C1 6.42487 5.92487 1.5 12 1.5C18.0751 1.5 23 6.42487 23 12.5C23 18.5751 18.0751 23.5 12 23.5C5.92487 23.5 1 18.5751 1 12.5ZM12 3.5C7.02944 3.5 3 7.52944 3 12.5C3 17.4706 7.02944 21.5 12 21.5C16.9706 21.5 21 17.4706 21 12.5C21 7.52944 16.9706 3.5 12 3.5Z"
        />
        <Svg.Path d="M12.2581 8.52428C11.7926 8.44443 11.3139 8.53191 10.9067 8.77122C10.4995 9.01054 10.1901 9.38625 10.0334 9.8318C9.85009 10.3528 9.27917 10.6266 8.75818 10.4433C8.23719 10.26 7.96342 9.68911 8.14669 9.16812C8.46016 8.27701 9.0789 7.52559 9.8933 7.04696C10.7077 6.56833 11.6652 6.39337 12.5963 6.55306C13.5273 6.71276 14.3718 7.19682 14.9801 7.91949C15.5883 8.64197 15.9213 9.55633 15.92 10.5007C15.9199 11.7001 15.5878 12.573 15.0157 13.2231C14.536 13.7682 13.9274 14.0943 13.5144 14.3157C13.4734 14.3377 13.4344 14.3586 13.3976 14.3786C13.2038 14.4839 13.1081 14.6343 13.0535 14.7829C13.0253 14.8595 13.0112 14.9291 13.0045 14.9761C13.0014 14.9981 13.0002 15.0131 12.9998 15.0188L12.9997 15.0209L12 15C11 15 11 14.9991 11 14.9991L11 14.9962L11 14.992L11.0001 14.9824L11.0007 14.9585C11.0012 14.9405 11.0022 14.9185 11.0038 14.8927C11.0071 14.8414 11.0131 14.7746 11.0242 14.6958C11.0463 14.5396 11.0897 14.328 11.1765 14.0921C11.3204 13.7011 11.5916 13.2272 12.0856 12.8516C12.1936 12.7695 12.3122 12.6921 12.4425 12.6213L12.5097 12.5848C12.5804 12.5464 12.6473 12.5101 12.7106 12.4753C13.0708 12.2771 13.3171 12.1259 13.5143 11.9018C13.7121 11.6771 13.92 11.3002 13.92 10.5L13.92 10.4985C13.9207 10.0262 13.7543 9.56882 13.4501 9.20749C13.1459 8.84615 12.7237 8.60413 12.2581 8.52428Z" />
      </Svg>
    );
  }
}

export default HelpIcon;