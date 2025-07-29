import { Input, InputContainer, Label, Utility } from '@visa/nova-react';
import { InputType } from '@/utils/types/types';
import { VisaEmailLow,VisaPasswordShowLow,VisaAccountTiny } from '@visa/nova-icons-react';

const id = 'input-default';

const InputComponent:React.FC<InputType> = ({label,place,value,change}) => {
  return (
    <Utility vFlex vFlexCol vGap={4}>
    <Label htmlFor={id}>{label} (required)</Label>
    <InputContainer>
      <Utility vFlex vFlexCol>
      {label === 'Name' &&  <VisaAccountTiny/>}
      {label === 'Email' &&  <VisaEmailLow/>}
        {label === 'Password' &&  <VisaPasswordShowLow/>}
        {label === 'Confirm Password' &&  <VisaPasswordShowLow/>}
      </Utility>
      <Input
      aria-required="true"
      id={id} type="text"
      placeholder={place}
      value={value}
      onChange={change}
      />
    </InputContainer>
  </Utility>
  );
};
export default InputComponent