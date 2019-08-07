//==============================================================================
// __   ____ _| (_) __| | __ _| |_(_) ___  _ __
// \ \ / / _` | | |/ _` |/ _` | __| |/ _ \| '_ \
//  \ V / (_| | | | (_| | (_| | |_| | (_) | | | |
//   \_/ \__,_|_|_|\__,_|\__,_|\__|_|\___/|_| |_|
//==============================================================================

/*
Title: User Perms validation
Auth: Anthony Pitts
Vers: 1.0
date: 8/7/19 *Last ModBODY
desc: Validates the Post Input


*/

//==============================================================================
// Head
//==============================================================================

const Validator = require("validator");
const isEmpty = require("./is-empty");

//==============================================================================
// BODY
//==============================================================================

module.exports = function validatePostInput(data) {
  let errors = {};

  // Set the inputs to empty string if empty
  data.userId = !isEmpty(data.userId) ? data.userId : "";
  data.caption = !isEmpty(data.caption) ? data.caption : "";

  if (Validator.isEmpty(data.userId)){
    errors.userId = "userId is required"
  }

  if (!Validator.isLength(data.userId, { max: 20 })) {
    errors.userId = "length must less than 20 characters";
  }

  if (!Validator.isLength(data.caption, { max: 10000 })) {
    errors.caption = "Caption length must less than 10,000 characters";
  }

  return {
    msg: errors,
    isValid: isEmpty(errors)
  };
};
