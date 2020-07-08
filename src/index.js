import React, { Component } from "react";
import cx from "classnames";

import { faAngleRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PropTypes from "prop-types";

import ModalSelector from "./ModalSelector.jsx";
import style from "./modaldropdown.css";
class ModalDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
    }
    this.getIcon = this.getIcon.bind(this);
    this.getActiveId = this.getActiveId.bind(this);
  }

  getIcon() {
    if (this.props.isAngleDown) return faAngleDown;
    else if (this.props.isAngleRight) return faAngleRight;
  }
  getActiveId() {
    const optionData = this.props.optionData || [];
    const Active = optionData.find((e) => e.Name === this.props.subHeading);
    if (Active) return Active.Id;
    else return null;
  }
  render() {
    return (
      <div>
        <div
          style={{ border: "1px solid #ced4da", cursor: "pointer" }}
          className={"rounded"}
          onClick={() => {
            this.setState({ openModal: true });
          }}
        >
          <div
            className={cx("d-flex justify-content-between  mr-3 ml-3", {
              [style.md]: this.props.size === "md",
              [style.sm]: this.props.size === "sm",
            })}
          >
            <div
              className={cx({
                [style.smtext]: this.props.size === "sm",
                [style.mdtext]: this.props.size === "md",
              })}
            >
              <h6
                className={cx({
                  "d-none":
                    this.props.size === "sm" && this.props.subHeading !== "",
                })}
              >
                {this.props.heading}
              </h6>
              <p
                className={cx({
                  "d-none":
                    this.props.size === "sm" && this.props.subHeading === "",
                })}
              >
                {this.props.subHeading}
              </p>
            </div>
            <FontAwesomeIcon
              icon={this.getIcon()}
              size="2x"
              className={cx({
                [style.sm]: this.props.size === "sm",
                [style.md]: this.props.size === "md",
              })}
            />
          </div>
        </div>
        <ModalSelector
          modal={this.state.openModal}
          toggle={() => {
            this.setState({ openModal: false });
          }}
          heading={this.props.heading}
          optionData={this.props.optionData}
          save={this.props.save}
          activeId={this.getActiveId()}
          keyField = {this.props.keyField}
        />
      </div>
    );
  }
}

export default ModalDropdown;
ModalDropdown.propTypes = {
  isAngleRight: PropTypes.bool,
  isAngleDown: PropTypes.bool,
  size: PropTypes.string,
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
  optionData: PropTypes.array.isRequired,
  save: PropTypes.func.isRequired,
  keyField:PropTypes.string.isRequired,
};
ModalDropdown.defaultProps = {
  isAngleRight: true,
  isAngleDown: false,
  size: "md",
};
