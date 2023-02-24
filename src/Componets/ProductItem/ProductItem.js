
import styles from './ProductItem.module.scss'

import classNames from 'classnames/bind'
const cx = classNames.bind(styles)


function ProcductItem({data}) {
    const {name,price,productImg}=data
    return ( 
        <div className={cx("product")}>
            <img className={cx("img")} alt='' src={productImg}/>
            <div className={cx("content")}>
                <p><b>{price}$</b></p>
                <p>{name}</p>
            </div>
        </div>
     );
}

export default ProcductItem;