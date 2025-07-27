export type Nav = {
    isOpen:boolean,
    handleClick: () => void
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
    required?:boolean
}
export type code_template = {
    name:string,
    template:string,
    props:code_templateProps

}
export type code_templateMap = {
    [key:string] : code_template
}