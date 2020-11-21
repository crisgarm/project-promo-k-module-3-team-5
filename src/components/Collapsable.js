import React from "react";

class Collapsable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClosed: true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      isClosed: !this.state.isClosed,
    });
  }
  render() {
    const openClassName = this.state.isClosed ? "js__hidden" : "";
    const openArrow = this.state.isClosed ? "" : "js__button-arrow";
    const showLine = this.state.isClosed ? "gen-main__customize-design" : "";

    return (
      <>
        <div
          onClick={this.handleClick}
          className="customize-form__container js-collapsable"
          tabIndex="2"
        >
          <img
            className="customize-form__container-logo"
            src={this.props.icon}
            alt="Share logo"
          />
          <h2 className="customize-form__container-title">
            {this.props.title}
          </h2>
          <button
            className={`customize-form__container-btn js-arrow ${openArrow}`}
          ></button>
        </div>
        <div className={`${openClassName}  ${showLine}`}>
          {this.props.children}
        </div>
      </>
    );
  }
}
export default Collapsable;
