import { Button } from '@visa/nova-react';
import { ButtonType } from '@/utils/types/types';
const ButtonComponent:React.FC<ButtonType> = ({text,click,isDisabled}) => {
  return <Button
  style={{
    padding:20
  }}
  onClick={click} className="cursor-pointer rounded-2xl" disabled={isDisabled}>{text}</Button>;
};

export default ButtonComponent