import React, { InputHTMLAttributes } from "react";

interface FormCheckProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FormCheck: React.FC<FormCheckProps> = ({ label = "", ...others }) => {
  const id = React.useId();

  return (
    <div className="form-check">
      <input type="checkbox" id={id} className="form-check-input" {...others} />
      <label htmlFor={id} className="form-check-label">
        {label}
      </label>
    </div>
  );
};

export default FormCheck;
