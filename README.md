# Modal Dropdown

A simple React component for modal list.

  
##  [Live Demo](https://agitated-kirch-67aca5.netlify.app/)

  

## Table of Contents

  
*  [Installation](#installation)

*  [Usage](#usage)

  

## Installation

  

`$ npm install modal-dropdown`

`$ yarn add modal-dropdown`

  

## Usage

### Required Props

  
-  `heading`: Label of Modal,

-  `subHeading`: Value of Modal,

-  `optionData`: Modal list data | `format` : [{Id:id , Name:value , Initial:image as base64}],  

-  `keyField`: Pass as a params when save function called

-  `save` which is the function called when the value is updated | `params`: Id,Name,keyField.
  
### Optional Props  

-  `isAngleRight`:  Angle right | `default` : **true**.

-  `isAngleDown`: Angle down | `default` : **false**.

-  `size`: **md'** | `default` : **sm** .


  

Example:
### [Demo Repository](https://github.com/Mustafamemon/demo-app/blob/master/src/DemoPages/modal-dropdown.js)
  
###   [Original Repository](https://github.com/Mustafamemon/modal-dropdown)

**Note** : Do Install [react-bootstrap](https://react-bootstrap.github.io/getting-started/introduction#examples) for better UI