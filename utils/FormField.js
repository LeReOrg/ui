import React from "react";

const FormField = ({ id, formData, change, useClasses, className }) => {
  const showError = (search) => {
    let errorMessage = null;

    if (formData.validation && !formData.valid) {
      errorMessage = (
        <div className="error_label">{formData.validationMessage}</div>
      );
    }
    if (search === "search") {
      errorMessage = null;
    }

    return errorMessage;
  };
  const renderTemplate = () => {
    let formTemplate = null;
    switch (formData.element) {
      case "input":
        formTemplate = (
          <div className="formBlock">
            {formData.showlabel ? (
              <div className="label_inputs">{formData.config.label}</div>
            ) : null}
            <input
              className={useClasses ? "form-control" : className}
              style={{ height: "unset" }}
              aria-label="Search"
              {...formData.config}
              value={formData.value}
              onBlur={(event) => change({ event, id, blur: true })}
              onChange={(event) => change({ event, id })}
            />
            {formData.config.name === "search_input"
              ? showError("search")
              : showError()}
          </div>
        );
        break;
      case "number":
        formTemplate = (
          <div className="formBlock">
            <input
              value={formData.value}
              onBlur={(event) => change({ event, id, blur: true })}
              onChange={(event) => change({ event, id })}
            />
            {showError()}
          </div>
        );
        break;
      case "textarea":
        formTemplate = (
          <div className="formBlock">
            {formData.showlabel ? (
              <div className="label_inputs">{formData.config.label}</div>
            ) : null}
            <textarea
              {...formData.config}
              value={formData.value}
              onBlur={(event) => change({ event, id, blur: true })}
              onChange={(event) => change({ event, id })}
            />
            {showError()}
          </div>
        );
        break;
      case "select":
        formTemplate = (
          <div className="formBlock">
            {formData.showlabel ? (
              <div className="label_inputs">{formData.config.label}</div>
            ) : null}
            <select
              value={formData.value}
              onBlur={(event) => change({ event, id, blur: true })}
              onChange={(event) => change({ event, id })}
            >
              <option value="">Select one</option>
              {formData.config.options.map((item) => (
                <option key={item.key} value={item.key}>
                  {item.value}
                </option>
              ))}
            </select>
            {showError()}
          </div>
        );
        break;
      default:
        formTemplate = null;
        break;
    }
    return formTemplate;
  };
  return <>{renderTemplate()}</>;
};

export default FormField;
