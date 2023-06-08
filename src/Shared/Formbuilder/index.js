
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import "./index.css";

export default function FormBuilder({ ...props }) {

    const { fields } = props;
    return (

        <div className='form'>

            {fields && fields.length > 0 && fields.map((field, index) => {
                return<>
                    {field.type == "text" ?
                        <div className={`form-label ${field.layout} ${field?.margin ? field?.margin : ""}`}>
                            <label>{field?.label}</label>
                            <TextField
                                id="filled-hidden-label-small"
                                defaultValue={field?.laceholder}
                                fullWidth
                                size="Normal"
                            />

                        </div> : field.type == "radio" ? <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label"
                            className={`form-label ${field.layout} ${field?.margin ? field?.margin : ""}`}>{field.label}</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                defaultValue="Customer"
                                name="radio-buttons-group"
                            >
                                {field?.options && field?.options.map((item,index)=>{
                                    return <FormControlLabel value={item.value} control={<Radio />} label={item.key} />
                                
                                }) }
                                                             
                            </RadioGroup>
                        </FormControl> : field.type == "Select" ? <div className='form-label'>
                            <label>{field.label}</label>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={field.options}                            
                                renderInput={(params) => <TextField {...params} label={field.label} />}
                            /></div> : field.type == "title" ?   <h3>{field?.label}</h3>  
                            
                            : null }
                
                </>  })}        

        </div>


    );
}
