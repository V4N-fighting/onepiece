import classNames from 'classnames/bind';
import styles from './NavItem.module.scss';

import Button from '~/Component/Button';

const cx = classNames.bind(styles);

function NavItem({ data }) {
    const {title, icon} =  data;
    
    return (
        <li className={cx('nav-item')}>
            <Button >
                {title} 
                {icon}
            </Button>
        </li>
    );
}

export default NavItem;
