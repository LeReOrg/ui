import React from "react";

const CustomForm = ({
  inputType,
  name,
  nameInput,
  nameSelect,
  inputOption,
  valueOptions,
  ...inputProp
}) => {
  const renderTemplate = () => {
    let formTemplate = null;
    switch (inputType) {
      case "input":
        formTemplate = (
          <>
            <input
              type={inputOption}
              name={nameInput}
              ref={name}
              {...inputProp}
            />
          </>
        );
        break;
      case "textarea":
        formTemplate = (
          <>
            <textarea
              type={inputType}
              name={nameInput}
              ref={name}
              {...inputProp}
              rows="4"
            />
          </>
        );
        break;
      case "select":
        formTemplate = (
          <>
            <select type={inputType} name={nameInput} ref={name} {...inputProp}>
              <option value="" style={{ color: "#C3C7C5" }}>
                {nameSelect}
              </option>
              {valueOptions?.map((item, index) => (
                <option
                  key={index}
                  value={
                    item._id ||
                    item.idCommune ||
                    item.idDistrict ||
                    item.idProvince
                  }
                >
                  {item.name}
                </option>
              ))}
            </select>
          </>
        );
        break;
      case "number":
        formTemplate = (
          <>
            <input
              type={inputType}
              name={nameInput}
              ref={name}
              {...inputProp}
            />
          </>
        );
        break;
      default:
        formTemplate = null;
        break;
    }
    return formTemplate;
  };
  return renderTemplate();
};
export default CustomForm;
