import Link from "next/link"
import { Header } from "Сomponents"
import s from './test.module.scss'

const Tests = () =>{
    return(
        <div>
            <Header/>
            <h1 className={s.title}>Test glavnaya</h1>
        </div>
        
    )
}

export default Tests