import { Form, Select  } from 'antd';
import { Controller } from 'react-hook-form';

type TPHSelectorProps ={
    label:string;
    name:string;
    options:{value: string, label:string, disabled?:boolean
    }[]
}


const PHSelect = ({label, name, options}: TPHSelectorProps) => {
    return (
    <Controller name={name} render={({field, fieldState: {error}}) =>(
        <Form.Item label={label}>
        <Select
         
          style={{ width:"100%" }}
          {...field}
          options={options}
          size='large'
        />
     {error && <small style={{color:"red"}}>{error.message}</small>}
        </Form.Item>
    )}>
      
    </Controller>
);
};

export default PHSelect;