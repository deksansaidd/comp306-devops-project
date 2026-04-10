function validateForm(fields) {
  return fields.every(field => field !== "");
}

module.exports = validateForm;