function validateForm(fields) {
    if (!Array.isArray(fields)) return false;

    return fields.every(field => field && field.trim() !== "");
}

module.exports = validateForm;