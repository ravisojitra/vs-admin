import React from "react";

export const CheckBox = React.forwardRef(
  (
    {
      inputClassName = "",
      className,
      name,
      checked = false,
      children,
      label = "",
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName}`}
            ref={ref}
            type="checkbox"
            name={name}
            {...restProps}
          />
          {label}
        </div>
        {children}
      </>
    );
  }
);
