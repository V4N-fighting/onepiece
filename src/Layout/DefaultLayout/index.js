import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Header from './Header';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={cx('container')}>{children}</div>
        </div>
    );
}

export default DefaultLayout;
