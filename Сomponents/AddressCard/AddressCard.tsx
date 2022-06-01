import { Icon, Button } from 'UI'

import s from './AddressCard.module.scss';

interface AddressCardProps {
    title: string,
    text: string
}

const AddressCard: React.FC<AddressCardProps> = (props) => {
    const { title, text } = props
    return (
        <div className={s.addressCard}>
            <div className={s.titleBox}>
                <span className={s.title}>{title}</span>
                <div className={s.icons}>
                    <Button variant='text'><Icon type='edit' color='#8100ef' /> <span className={s.span}>Edit</span></Button>
                    <Button variant='text'><Icon type='trash_can' color='#8100ef' /><span className={s.span}>Delete</span></Button>
                </div>
            </div>
                <p>{text}</p>
            
        </div>
    )
}
export default AddressCard
