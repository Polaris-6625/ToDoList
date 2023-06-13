import {Component} from "react";
import type { MenuProps } from "antd";
import {Button, Tag , Dropdown} from 'antd';
import "../theme-chelk/Main.scss";
import ShowText from "./ShowText";
import store from "../redux/store/index";
import AddToDo from "./AddToDo.tsx";
import {
    PlusSquareOutlined,
} from '@ant-design/icons';
import {NavLink, Route, Routes, BrowserRouter} from "react-router-dom";

function addFun():void {
    const value = 3;
    store.dispatch({type:"add",state:9,data:value})
    console.log(store.getState());
}

function showAddPage():void {

}

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <Button type="primary" onClick={ showAddPage }>添加</Button>
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

export default function Main() {
    return (
        <BrowserRouter className="Main">
                <Tag color="magenta">便签</Tag>
                <Routes>
                    <Route path="/" element={
                        <ShowText></ShowText>
                    }/>
                    <Route path="/AddToDo" element={
                        <AddToDo></AddToDo>
                    }/>
                </Routes>
                <div className="bottom_add">
                    <Dropdown menu={{ items }} placement="topLeft" arrow>
                        <Button type="primary" shape="circle" size="large" icon={<PlusSquareOutlined />} />
                    </Dropdown>
                </div>
            </BrowserRouter>
    )
}