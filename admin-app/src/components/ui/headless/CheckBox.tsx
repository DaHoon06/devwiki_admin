import React, { ReactElement } from 'react';

type CheckBoxContextProps = {
  id: string;
  isChecked: boolean;
  onChange: () => void;
};

type CheckBoxProps = CheckBoxContextProps & React.PropsWithChildren<{}>;

const CheckBoxContext = React.createContext<CheckBoxContextProps>({
  id: '',
  isChecked: false,
  onChange: () => {},
});

const CheckBoxWrapper = (props: CheckBoxProps): ReactElement => {
  const { id, isChecked, onChange, children } = props;
  const value = { id, isChecked, onChange };
  return (
    <CheckBoxContext.Provider value={value}>
      {children}
    </CheckBoxContext.Provider>
  );
};

const useCheckBoxContext = () => {
  return React.useContext(CheckBoxContext);
};
export const CheckBox = ({ ...props }): ReactElement => {
  const { id, isChecked, onChange } = useCheckBoxContext();
  return (
    <input
      type={'checkbox'}
      id={id}
      checked={isChecked}
      onChange={onChange}
      {...props}
    />
  );
};

const Label = ({
  children,
  ...props
}: React.PropsWithChildren<{}>): ReactElement => {
  const { id } = useCheckBoxContext();
  return (
    <label htmlFor={id} {...props}>
      {children}
    </label>
  );
};

CheckBoxWrapper.Checkbox = CheckBox;
CheckBoxWrapper.Label = Label;

export default CheckBoxWrapper;
