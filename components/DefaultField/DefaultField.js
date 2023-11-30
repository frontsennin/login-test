import { useState } from "react";
import { validEmail } from "../../utils/validations";

const DefaultField = ({
  title,
  placeholder,
  type,
  name,
  id,
  valueEmitter,
  fieldIsValid,
}) => {
  const [value, setValue] = useState("");
  const [valid, setValid] = useState();
  const [invalidText, setInvalidText] = useState("");

  const validValue = (event) => {
    const value = event.target.value;
    if (type == "email") {
        setValue(value);
      if (value.length > 0) {
        const validation = validEmail(value);
        fieldIsValid(validation);
        setValid(validation);
        setInvalidText("");

        if (!validation) {
          setInvalidText("Enail inválido");
        }
      } else {
        setValid(false);
        setInvalidText("Campo Obrigatório");
      }
    }

    if (type == "password") {
        setValue(value);
      if (value.length > 0) {
        const validation = value.length > 1;
        fieldIsValid(validation);
        setValid(validation);
        setInvalidText("");

        if (!validation) {
          setInvalidText("Senha Inválida");
        }
      } else {
        setValid(false);
        setInvalidText("Campo Obrigatório");
      }
    }

    if(type == 'text') {
      setValue(value);
      if (value.length > 0) {
        const validation = value.length > 1;
        fieldIsValid(validation);
        setValid(validation);
        setInvalidText("");

        if (!validation) {
          setInvalidText("Campo Inválido");
        }
      } else {
        setValid(false);
        setInvalidText("Campo Obrigatório");
      }
    }

    valueEmitter(value)
  };

  return (
    <div className="form-group w-100">
      <label className="default-label">{title}</label>
      <input
        className="default-field w-100"
        placeholder={placeholder}
        type={type}
        name={name}
        id={id}
        onChange={validValue}
        onBlur={validValue}
      />
      {!valid && value.length > 0 && (
        <div id={`${id}-invalid`} className="invalid-field">
          {invalidText}
        </div>
      )}
    </div>
  );
};

export default DefaultField;
