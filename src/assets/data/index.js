import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export const NAV_LIST = [
    {
        title: 'Thông Tin Mới',
        children: [{ title: 'Thông Tin Mới' }, { title: 'Chương Mới' }, { title: 'Cộng Đồng' }],
        icon: <FontAwesomeIcon icon={faCaretDown} />,
    },
    {
        title: 'Giới Thiệu',
        children: [{ title: 'Giới Thiệu' }, { title: 'Cốt Truyện' }, { title: 'Bản Đồ Thế Giới' }],
        icon: <FontAwesomeIcon icon={faCaretDown} />,
    },
    {
        title: 'Nhân Vật',
        children: [
            { title: 'Hải Tặc' },
            { title: 'Sơn Tặc' },
            { title: 'Thế Giới Ngầm' },
            { title: 'Chính Quyền Thế Giới' },
            { title: 'Quân Cách Mạng' },
        ],
        icon: <FontAwesomeIcon icon={faCaretDown} />,
    },
];
