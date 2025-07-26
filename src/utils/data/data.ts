import {VisaSearchLow, GenericSearchTiny} from "@visa/nova-icons-react";
import { code_templateMap } from "../types/types";
export const sidebar = [
    {
        name:'New Chat',
        icon: VisaSearchLow
    },
    {
        name:'Search chats',
        icon: GenericSearchTiny
    },
    {
        name:'Library',
        icon: VisaSearchLow
    },

]

// componentMapper.ts
export const componentMap = {
    "login": ["Input", "Checkbox", "Button",'InputContainer', 'Label', 'Utility'],
    "form": ["Input", "Button"],
    "remember me": ["Checkbox"],
    "contact": ["Input", "Button"],
    "signup": ["Input", "Checkbox", "Button"],
    "password": ["Input"],
    "submit": ["Button"],
};

const code_template:code_templateMap = {
    Input: {
      name: 'Input',
      template: `<Utility vFlex vFlexCol vGap={4}>
      <Label htmlFor={id}>Label (required)</Label>
      <InputContainer>
        <Input aria-required="true" id={id} type="text" />
      </InputContainer>
    </Utility>`,
      props: {
        type: 'email',
        placeholder: 'Enter your email',
        required: true
      }
    },
    Checkbox: {
      name: 'Checkbox',
      template: `<Utility vAlignItems="center" vFlex vGap={2}>
      <Checkbox id={id} />
      <Label htmlFor={id}>Label</Label>
    </Utility>`,
      props: {
        label: 'Remember me',
        checked: false
      }
    },
    Button: {
      name: 'Button',
      template: '<Button>Primary action</Button>',
      props: {
        type: 'submit',
        variant: 'primary',
        children: 'Submit'
      }
    },
    Select: {
      name: 'Select',
      template: `import { VisaChevronDownTiny } from '@visa/nova-icons-react';
            import { InputContainer, InputControl, Label, Select, Utility } from '@visa/nova-react';

            // TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
            const id = 'default-select';

            const options = ['Option A', 'Option B', 'Option C', 'Option D', 'Option E'];

            export const DefaultSelect = () => {
            return (
                <Utility tag="fieldset" vFlex vFlexCol vGap={6}>
                <Label htmlFor={id}>Label (required)</Label>
                <InputContainer>
                    <Select id={id} name={}>
                    <option hidden value="" />
                    {options.map((option, index) => (
                        <option key={} value={index}>
                        {option}
                        </option>
                    ))}
                    </Select>
                    <InputControl>
                    <VisaChevronDownTiny />
                    </InputControl>
                </InputContainer>
                </Utility>
            );
            };`,
      props: {
        placeholder: 'Select an option'
      }
    }
  };

//   const createIndent = (level, size = 2) => ' '.repeat(level * size);

// const extractFormNameSimple = (sentence: string): string => {
//     const words = sentence.toLowerCase().split(' ');
    
//     // Look for form-related keywords
//     const formKeywords = ['login', 'register', 'contact', 'signup', 'checkout', 'payment'];
    
//     const foundKeyword = formKeywords.find(keyword => 
//       words.some(word => word.includes(keyword))
//     );
    
//     if (foundKeyword) {
//       // Capitalize first letter and add "Form"
//       return foundKeyword.charAt(0).toUpperCase() + foundKeyword.slice(1) + 'Form';
//     }
    
//     return 'Form'; // Default fallback
//   };

const createIndent = (level, size = 2) => ' '.repeat(level * size);

const interpolateTemplate = (template, props) => {
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    const value = props[key];
    if (typeof value === 'string') return value;
    if (typeof value === 'boolean') return `{${value}}`;
    if (typeof value === 'number') return `{${value}}`;
    return match;
  });
};
export const generateCode = (config) => {
    const {
      components,
      formName,
      indentSize = 2
    } = config;
  
    const validComponents = components.filter(comp => code_template[comp]);
    
    // if (validComponents.length === 0) {
    //   return 'No valid components selected';
    // }
  
    const imports = validComponents.join(', ');
    
    // const formPropsStr = Object.entries(formProps)
    //   .map(([key, value]) => {
    //     if (typeof value === 'string') return `${key}="${value}"`;
    //     return `${key}={${JSON.stringify(value)}}`;
    //   })
    //   .join(' ');
  
    let code = '';
    
    code += `import React from 'react';\n`;
    code += `import { ${imports} } from '@visa/nova-react';\n\n`;
    
    code += `export default function ${formName}() {\n`;
    
    const hasInput = validComponents.some(comp => ['Input', 'Select'].includes(comp));
    if (hasInput) {
      code += `${createIndent(1, indentSize)}const [formData, setFormData] = React.useState({});\n\n`;
      code += `${createIndent(1, indentSize)}const handleChange = (e) => {\n`;
      code += `${createIndent(2, indentSize)}const { name, value } = e.target;\n`;
      code += `${createIndent(2, indentSize)}setFormData(prev => ({ ...prev, [name]: value }));\n`;
      code += `${createIndent(1, indentSize)}};\n\n`;
      code += `${createIndent(1, indentSize)}const handleSubmit = (e) => {\n`;
      code += `${createIndent(2, indentSize)}e.preventDefault();\n`;
      code += `${createIndent(2, indentSize)}console.log('Form data:', formData);\n`;
      code += `${createIndent(1, indentSize)}};\n\n`;
    }
    
    code += `${createIndent(1, indentSize)}return (\n`;
    
    const formTag = hasInput 
      ? `<form onSubmit={handleSubmit}>`
      : `<form>`;
    
    code += `${createIndent(2, indentSize)}${formTag}\n`;
    
    validComponents.forEach((comp, index) => {
      const config = code_template[comp];
      let componentCode = interpolateTemplate(config.template, config.props);
      
      if (hasInput && ['Input', 'Select'].includes(comp)) {
        componentCode = componentCode.replace(/\/?>$/, ` name="${comp.toLowerCase()}${index}" onChange={handleChange} />`);
      }
      
      code += `${createIndent(3, indentSize)}${componentCode}\n`;
    });
    
    code += `${createIndent(2, indentSize)}</form>\n`;
    code += `${createIndent(1, indentSize)});\n`;
    code += `}`;
    
    return code;
  };

