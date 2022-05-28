import * as React from 'react';
// import { purple } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import style from './CheckboxLabels.module.scss'


interface CheckboxLabel {
    label: string
}

const CheckboxItem: React.FC<CheckboxLabel> = (props) => {
    const { label } = props
    return (
        <>
            <Checkbox
                sx={{
                    color: '#8101EF',
                    '&.Mui-checked': {
                        color: '#8101EF',
                    },
                }}
            />
            <span>{label}</span>
        </>

    );
}
export default CheckboxItem