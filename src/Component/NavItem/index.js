import classNames from 'classnames/bind';
import styles from './NavItem.module.scss';

import Button from '~/Component/Button';

const cx = classNames.bind(styles);

function NavItem({ data }) {
    return (
        <li className={cx('nav-item')}>
            <Button text rightIcon={data.icon ? data.icon : false}>
                {data.title}
            </Button>
        </li>
    );
}

export default NavItem;
