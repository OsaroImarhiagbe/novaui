import { Input, InputContainer, Label, Utility } from '@visa/nova-react';

// TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
const id = 'input-default';

const DefaultInput = () => {
  return (
    <Utility vFlex vFlexCol vGap={4}>
      {/* <Label htmlFor={id}>Label (required)</Label> */}
      <InputContainer>
        <Input aria-required="true" id={id} type="text"/>
      </InputContainer>
    </Utility>
  );
};

export default DefaultInput