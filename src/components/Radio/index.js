import React from "react";

export const Radio = React.forwardRef(
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
            type="radio"
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
