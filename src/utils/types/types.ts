

export type Nav = {
    isOpen:boolean,
    handleClick: () => void
}

export type ButtonType =  {
    text?:string,
    click?: () => void,
    isDisabled?:boolean,
}
export type CardType = {
    headline:string,
    description:string
    img:string
}
export interface AuthCardType {
    email?:string,
    password?:string,
    confirmPassword?:string,
    handleSignUp?:() => void,
    handleLogin?:() => void,
    loading?:boolean,
    auth?:string,
    isDisabled?:boolean,
    errors?:ErrorType
    username?:string,
    emailValue?:string,
    passwordValue?:string,
    nameValue?:string,
    confirmValue?:string,
    emailChange?:(e:React.ChangeEvent<HTMLInputElement>) => void,
    passwordChange?:(e:React.ChangeEvent<HTMLInputElement>) => void,
    nameChange?:(e:React.ChangeEvent<HTMLInputElement>) => void,
    confirmPasswordChange?:(e:React.ChangeEvent<HTMLInputElement>) => void
}
export type ErrorType = {
    name:string,
    email:string,
    password:string,
    confirmPassword:string
  }
export type NewErrorType = {
    name:string,
    email:string,
    password:string,
    confirmPassword:string
  }
export interface InputType extends AuthCardType {
    label?:string,
    place?:string,
    value?:string,
    change?:(e:React.ChangeEvent<HTMLInputElement>) => void;
}
export type CheckboxType =  {
    text?:string,
    checked?:boolean,
    id?:string,
    isDisabled?:boolean,
    onCheckedChange:(input:string,checked:boolean) => void
}
export type ConversationType = {
    role?:'user' | 'ai'
    message?:string,
    user_id?:string,
    date?:string,
    ai_id?:string,
    code?:string
}
export interface Messageitem{
    message:string,
    user_id:string,
    date:string,
    ai_id:string,
    role:'user' | 'ai',
    NovaAi:boolean,
    code?:string
}

export type GenerateCode = {
    components:string[],
    formName:string,
    indentSize?:number
}

export type code_templateProps = {
    type?:string,
    placeholder?:string,
    label?:string,
    checked?:boolean,
    variant?:string,
    children?:string
    required?:boolean,
    buttonSize?:string,
    colorScheme?:string,
    id?:string,
    tag?:string,
    src?:string,
    alt?:string,
    badgeType?:string,
    chipType?:string,
    htmlFor?:string,
}
export type code_template = {
    name:string,
    template:string,
    props?:code_templateProps

}
export type code_templateMap = {
    [key:string] : code_template
}