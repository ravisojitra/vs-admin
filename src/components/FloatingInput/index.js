import React from "react";

export const FloatingInput = React.forwardRef(
  (
    {
      className,
      name,
      labelClasses,
      wrapperClasses,
      labelText,
      defaultText,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={`relative ${wrapperClasses}`}>
        <input
          ref={ref}
          name={name}
          className={`${className}`}
          placeholder=" "
          defaultValue={defaultText}
          {...rest}
        />
        <label className={`${labelClasses}`}>{labelText}</label>
      </div>
    );
  }
);
