import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  ListGroup,
  ListGroupItem,
  Modal,
  ModalHeader,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
} from "reactstrap";

import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import ReactDOM from "react-dom";

import style from "./modaldropdown.css";

const modalRoot = document.getElementById("modal-root");


class ModalSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionData: props.optionData,
      copyOptionData: props.optionData,
    };
    this.onSearch = this.onSearch.bind(this)
  }
  onSearch(e){
    const searchValue = e.target.value.toLowerCase();
    var optionData = [];

    optionData = this.state.copyOptionData.filter((item) => {
      return item.Name.toLowerCase().includes(searchValue);
    });
    this.setState({ optionData });
  };

  render() {
    return ReactDOM.createPortal(
      <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
        <ModalHeader>{this.props.heading}</ModalHeader>
        <div className="p-2">
          <InputGroup>
            <Input placeholder="search..." onChange={this.onSearch} />
            <InputGroupAddon addonType="append">
              <InputGroupText>
                <>
                  <FontAwesomeIcon icon={faSearch} />
                  <span className="pl-2">Search</span>
                </>
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </div>
        <ListGroup flush className={style.listgroupstyle}>
          {this.state.optionData.map((data) => {
            const { Id, Name, Initial } = data;
            let imgSrc = "data:image/png;base64," + Initial;
            return (
              <ListGroupItem
                key={Id}
                className={cx("p-2", {
                  [style.activelist]: this.props.activeId === Id,
                })}
                onClick={() => {
                  this.props.save(Id, Name, this.props.keyField);
                  this.props.toggle();
                }}
              >
                <div className={"d-inline-block"}>
                  {Initial && (
                    <img
                      width={36}
                      height={36}
                      src={imgSrc}
                      alt=""
                      className="rounded-circle"
                    />
                  )}
                  <h6 className={"d-inline p-2"}>{Name}</h6>
                </div>
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </Modal>,
      modalRoot
    );
  }
}
ModalSelector.propTypes = {
  toggle: PropTypes.func,
  modal: PropTypes.bool,
  heading: PropTypes.string,
  optionData: PropTypes.array,
  save: PropTypes.func,
  activeId: PropTypes.string,
  keyField: PropTypes.string,
};
export default ModalSelector;
