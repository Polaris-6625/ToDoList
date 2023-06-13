import {Component} from "react";
import {Button, Tag , Dropdown} from 'antd';
import "../theme-chelk/Main.scss";
import ShowText from "./ShowText";
import store from "../redux/store/index";
import {
    PlusSquareOutlined,
} from '@ant-design/icons';

function addFun():void {
    const value = 3;
    store.dispatch({type:"add",state:9,data:value})
    console.log(store.getState());
}

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <Button type="primary">添加</Button>
        ),
    },
    {
        key: '2',
        label: (
            <Button type="primary" onClick={ addFun }>哈哈</Button>
        ),
    },
    {
        key: '3',
        label: (
            <Button type="primary">清空</Button>
        ),
    },
];

class Main extends Component<any, any> {
    render() {
        return (
            <div className="Main">
                <Tag color="magenta">便签</Tag>
                <ShowText></ShowText>
                <div className="bottom_add">
                    <Dropdown menu={{ items }} placement="topLeft" arrow>
                        <Button type="primary" shape="circle" size="large" icon={<PlusSquareOutlined />} />
                    </Dropdown>
                </div>
            </div>
        );
    }
}
export default Main;
