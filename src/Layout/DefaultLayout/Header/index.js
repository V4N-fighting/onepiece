import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import useState from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faEarth, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import Button from '~/Component/Button';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/Component/Popper';
import { NAV_LIST } from '~/assets/data';

import Tippy from '@tippyjs/react/headless';
import NavItem from '~/Component/NavItem';
import { InputSearch } from './component/InputSearch';

const cx = classNames.bind(styles);

const Header = () => {
    const  renderTippy = (dataRender, attrs) => {
        return (
            <div className={cx('box')} tabIndex="-1" {...attrs}>
                        {dataRender && (
                            <PopperWrapper>
                                {dataRender.map((item, index) => (
                                    <NavItem key={index} data={item}>
                                        {item.title}
                                    </NavItem>
                                ))}
                            </PopperWrapper>
                        )}
             </div>
        )
    }
    const renderNavList = () => {
        return NAV_LIST.map((item, index) => (
            <Tippy
                interactive
                placement="bottom"
                key={index}
                render={(attrs) => renderTippy(item.children, attrs)}
            >
                <div className={cx('cover')}>
                    <NavItem data={item} />
                </div>
            </Tippy>
        ));
    };

  

    return (
        <div className={cx('header')}>

            <a href="/" className={cx('left-content')}>
                <img className={cx('logo')} src={images.logo} alt="logo" />
            </a>

            <div className={cx('center-content')}>
                <ul className={cx('nav-list')}>{renderNavList()}</ul>
            </div>

            <div className={cx('right-content')}>
                <InputSearch/>
                <div className={cx('cover')}>
                    <Button to="/new" target="_blank" customClass='primary'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Button>
                </div>
                <div className={cx('cover')}>
                    <Button>
                        <FontAwesomeIcon icon={faEarth} />
                    </Button>
                </div>
                <div className={cx('cover')}>
                    <Button>Đăng ký</Button>
                </div>
                <div className={cx('cover')}>
                    <Button> Đăng nhập </Button>
                </div>
            </div>
        </div>
    );
}

export default Header;
