import { Input, InputContainer, Label, Utility } from '@visa/nova-react';
import { InputType } from '@/utils/types/types';
import { VisaEmailLow,VisaPasswordShowLow } from '@visa/nova-icons-react';

const id = 'input-default';

const InputComponent:React.FC<InputType> = ({label,place}) => {
  return (
    <Utility vFlex vFlexCol vGap={4}>
    <Label htmlFor={id}>{label} (required)</Label>
    <InputContainer>
      <Utility vFlex vFlexCol>
      {label === 'Email' &&  <VisaEmailLow/>}
        {label === 'Password' &&  <VisaPasswordShowLow/>}
      </Utility>
      <Input aria-required="true" id={id} type="text" placeholder={place}/>
    </InputContainer>
  </Utility>
  );
};
export default InputComponent