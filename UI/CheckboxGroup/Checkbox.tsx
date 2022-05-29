import s from './Checkboxs.module.scss';
import cn from 'classnames'
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

interface CustomProps {
    radius?: boolean,
    children: any,
    colorGray?: boolean
}
const CustomCheckbox: React.FC<CustomProps> = (props) => {
    const { radius, children, colorGray } = props
    return (
        <div className={cn(s.customCheckbox, { [s.colorGray]: colorGray })}>
            <FormGroup>
                <FormControlLabel control={<Checkbox
                    icon={
                        radius ?
                            <svg width='24px' height="24px" fill='#8100ef' viewBox="0 0 24 24" ><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></svg>
                            :
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="#8100ef"><path d="M 3 3 H 21 V 21 H 3 V 3 L 4 4 V 20 H 20 V 4 H 4 Z"></path></svg>
                    }
                    checkedIcon={
                        radius ?
                            <svg width='24px' height="24px" fill='#8100ef' viewBox="0 0 24 24" data-testid="CheckBoxIcon"><path stroke-width="1" d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>
                            :
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="#8100ef"><path d="M 19 3 H 3 v 18 h 18 V 3 z m -9 14 l -5 -5 l 1.41 -1.41 L 10 14.17 l 7.59 -7.59 L 19 8 l -9 9 z"></path></svg>
                    }
                />} label={children} />
            </FormGroup>
        </div>

    );
}
export default CustomCheckbox