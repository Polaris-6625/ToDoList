import {Component} from "react";
import { Button, Tooltip, Space , Avatar , Input , Dropdown } from 'antd';
import {
    LeftOutlined,
    SearchOutlined,
    UserOutlined,
    AudioOutlined,
    MenuFoldOutlined
} from '@ant-design/icons';
import "../theme-chelk/Menu.scss";

const onClick: MenuProps['onClick'] = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

const items: MenuProps['items'] = [
    {
      label: '日志',
      key: '1',
    },
    {
      label: '活动',
      key: '2',
    },
    {
      label: '个人',
      key: '3',
    },
  ];

class Menu extends Component<any, any> {
    render() {
        const { Search } = Input;
        const suffix = (
            <AudioOutlined
                style={{
                    fontSize: 16,
                    color: '#1890ff',
                }}
            />
        );

        const onSearch = (value: string) => console.log(value);

        return (
            <div className="Menu">
                <div className="Menu-back">
                    <LeftOutlined />
                </div>
                <div className="Menu-avatar">
                    <Avatar size={40} icon={<UserOutlined />} />
                </div>
                <div className="Menu-input">
                    <Search
                        placeholder="input search text"
                        enterButton="Search"
                        size="normal"
                        suffix={suffix}
                        onSearch={onSearch}
                    />
                </div>
                <div className="Menu-text">
                    <span className="span_1">日志</span>
                    <span className="span_2">活动</span>
                    <span className="span_3">个人</span>
                </div>
                <div className="Menu-choose">
                    <Dropdown menu={{items}}>
                        <MenuFoldOutlined className="choose--style"/>
                    </Dropdown>
                </div>
            </div>
        );
    }
}
export default Menu;
