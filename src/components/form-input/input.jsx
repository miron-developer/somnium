import styled from "styled-components";

const SFormField = styled.div`
  margin: 0.5rem 0;
`;

const SFormInputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const SFormInputLabel = styled.label`
  white-space: nowrap;

  &.required::after {
    content: "*";
    color: red;
  }
`;

const SFormInput = styled.input`
  margin-left: 1rem;
  padding: 0.5rem;
  width: 100%;
  font-size: 1rem;
  color: white;
  background: #00000021;
  border: none;
  border-radius: 5px;
  border-bottom: 1px solid black;
  outline: none;
  box-shadow: 4px 4px 3px 0 #00000029;
`;

const SFormInputNotification = styled.div`
  color: red;
`;

const minmaxNotif = (notifType, min, max) => {
  if (min || max) {
    let notif = notifType + " ";
    if (min) notif += "с " + min;
    if (max) notif += " до " + max;
    return notif;
  }
  return undefined;
};

export const Label = ({ required, id, labelText }) => (
  <SFormInputLabel className={required ? "required" : ""} htmlFor={id}>
    {" "}
    {labelText}{" "}
  </SFormInputLabel>
);

export default function Input({
  index,
  id,
  type = "text",
  name,
  labelText,
  base,
  minLength,
  maxLength,
  min,
  max,
  required = true,
  placeholder = "",
  autoFocus,
}) {
  // notifications
  let nots = [];
  if (required) nots.push("обязательно");
  nots.push(minmaxNotif("длина", minLength, maxLength));
  nots.push(minmaxNotif("величина", min, max));
  nots = nots.filter((not) => not);

  return (
    <SFormField className={"form-field-" + index}>
      <SFormInputWrapper>
        <Label required={required} id={id} labelText={labelText} />
        <SFormInput
          className="form-input"
          id={id}
          type={type}
          name={name}
          required={required}
          min={min}
          max={max}
          minLength={minLength}
          maxLength={maxLength}
          placeholder={placeholder}
          autoFocus={autoFocus}
          {...base}
        />
      </SFormInputWrapper>
      <SFormInputNotification className="form-input-notification">
        {nots.join(", ")}
      </SFormInputNotification>
    </SFormField>
  );
}
