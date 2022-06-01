import { Icon } from 'UI'
import s from './AddressCard.module.scss';

interface AddressCardProps {
    title: string,
    number?: string,
    country?: string,
    address: string
}

const AddressCard: React.FC<AddressCardProps> = (props) => {
    const { title, number, country, address } = props
    return (
        <div className={s.addresCard}>
            <div className={s.titleBox}>
                <div className={s.title}>{title}</div>
                <div className={s.icons}>
                    <div><Icon type='edit' color='#8100ef' /> <span className={s.span}> Edit </span></div>
                    <div><Icon type='trash_can' color='#8100ef' /><span className={s.span}>Delete</span></div>
                </div>
            </div>
            <div className={s.content}>
                <p>{address}</p>
                <p>{country}</p>
                <p>{number}</p>
            </div>
        </div>
    )
}
export default AddressCard
