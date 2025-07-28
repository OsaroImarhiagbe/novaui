import { Checkbox, Label, Utility } from '@visa/nova-react';
import { CheckboxType } from '@/utils/types/types';
// TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react

const CheckboxComponent:React.FC<CheckboxType> = ({text,checked,onCheckedChange,id,isDisabled}) => {
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        onCheckedChange(text ?? 'default',e.target.checked)
    }
  return (
    <Utility vAlignItems="center" vFlex vGap={2}>
      <Checkbox
      checked={checked}
      disabled={isDisabled}
      onChange={handleChange}
      id={id} />
      <Label htmlFor={id}>{text}</Label>
    </Utility>
  );
};

export default CheckboxComponent