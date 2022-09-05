import React, { useState } from "react";
import cx from "classnames";

import "./TextInput.scss";
import TextInputLabel from "../TextInputLabel";

interface IProps extends Omit<React.HTMLProps<HTMLInputElement>, "onChange"> {
  className?: string;
  errorMessage?: string;
  fieldWrapperClassName?: string;
  hasError?: boolean;
  innerRef?: React.RefObject<HTMLInputElement>;
  inputClassName?: string;
  inputWrapperClass?: string;
  isRequired?: boolean;
  isSearch?: boolean;
  label?: string;
  labelColor?: string;
  labelContent?: string;
  labelSize?: string;
  labelWeight?: string;
  onChange?: (newValue: string) => void;
  onChangeEvent?: (newEvent: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  subLabel?: string;
  type?: string;
  value?: string;
  withClear?: boolean;
  withDollarSign?: boolean;
  withPercentSign?: boolean;
}

export const TextInput: React.FC<IProps> = (props) => {
  const {
    children,
    className,
    disabled,
    errorMessage,
    fieldWrapperClassName,
    hasError,
    innerRef,
    inputClassName,
    label,
    labelColor,
    labelContent,
    labelSize,
    labelWeight,
    name,
    inputWrapperClass,
    isRequired,
    isSearch,
    placeholder,
    onChange,
    onChangeEvent,
    onClear,
    subLabel,
    type,
    value,
    withClear,
    withDollarSign,
    withPercentSign,
    ...inputProps
  } = props;

  const [defaultValue, setDefaultValue] = useState(placeholder);

  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChangeEvent) {
      onChangeEvent(e);
    } else if (onChange) {
      onChange(e.target.value);
    }
  };

  const onClearInputClick = () => {
    if (onChangeEvent) {
      onChangeEvent({
        target: { name: name!, value: "" },
      } as React.ChangeEvent<HTMLInputElement>);
    } else if (onChange) {
      onChange("");
    }

    if (onClear) {
      onClear();
    }
  };

  const mainClass = cx("TextInput", inputWrapperClass);
  const inputClass = cx("textInputField", className);
  if (label || labelContent) {
    return (
      <TextInputLabel
        className={mainClass}
        // color={labelColor}
        // fontSize={labelSize}
        // fontWeight={labelWeight}
        label={label}
        // subLabel={subLabel}
      >
        {children}
        <input
          className={inputClass}
          placeholder={defaultValue}
          disabled={disabled}
          name={name}
          onChange={_onChange}
          onFocus={() => setDefaultValue("")}
          onBlur={() => setDefaultValue(placeholder)}
          ref={innerRef}
          type={type}
          value={value}
          {...inputProps}
        />
        {labelContent && (
          <label className="TextInput-labelContent">{labelContent}</label>
        )}
      </TextInputLabel>
    );
  } else {
    return (
      <input
        className={inputClass}
        placeholder={defaultValue}
        disabled={disabled}
        name={name}
        onChange={_onChange}
        onFocus={() => setDefaultValue("")}
        onBlur={() => setDefaultValue(placeholder)}
        ref={innerRef}
        type={type}
        value={value}
        {...inputProps}
      />
    );
  }
};

export default TextInput;
