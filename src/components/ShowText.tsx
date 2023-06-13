import {Component, useState} from "react";
import {Button, Modal, Pagination , notification} from "antd";
import axios from "axios";
import type { NotificationPlacement } from 'antd/es/notification/interface';
import "../theme-chelk/ShowText.scss";
import {
    CloseCircleOutlined,
} from '@ant-design/icons';

const baseURL = "http://127.0.0.1:8080/getList";
class ShowText extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = { isLoading: true , list: undefined , page: "1",isModalOpen:false, setIsModalOpen:false};
    }
    componentWillMount() {
        axios
            .post(baseURL, {
                "page":"1"
            })
            .then((response) => {
                console.log(response.data)
                this.setState({ list: response.data });
                this.setState({ isLoading: false });
            })
            .catch((err)=>{
                console.log(err);
            });
    }
    render() {
        const {isLoading,list,isModalOpen,setIsModalOpen} = this.state;
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const _this = this;
        const page = 1;

        const openNotification = () => {
            notification.open({
                message: '删除成功',
                description:
                    '改待办已经被删除',
                duration: 2.5,
                onClick: () => {
                    console.log('Notification Clicked!');
                },
            });
        };
        const showModal = () => {
            console.log("点击了删除");
            _this.setState({setIsModalOpen:true})
        };

        const handleOk = () => {
            _this.setState({setIsModalOpen:false})
            // deleteFunc()
            openNotification()
        };

        const handleCancel = () => {
            _this.setState({setIsModalOpen:false})
        };
        function deleteFunc(index) {
            axios.post(baseURL, {
                "id":index
            }).then((resp)=>{
                alert("删除成功")
            }).catch((err)=>{
                alert("出现异常")
            })
        }
        if (isLoading) {
            return (
                <div>加载中...</div>
            )
        }
        return (
            <div>
                <Modal title="Basic Modal" open={setIsModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <h3>确定要删除吗?</h3>
                </Modal>
                <div className="Title">
                    <span className="smallTitle">事情</span>
                    <span className="smallTitle">日期</span>
                </div>
                <div className="ShowText--content">
                    {
                        list.map((item,index) => {
                            const size = "small";
                            return (
                                <div className="ShowText-row" key={index}>
                                    <div className="langBlock">{item.things}</div>
                                    <div className="langBlock">{item.date}</div>
                                    <div className="closeIcon" onClick={showModal}>
                                        <CloseCircleOutlined twoToneColor="#ff4d4f"/>
                                    </div>
                                    <Button type="primary" size={size}>编辑</Button>
                                </div>
                            )
                        })
                    }
                    <div className="pagination">
                        <Pagination defaultCurrent={page} total={500} onChange={function (index) {
                            _this.setState({page:index});
                            axios
                                .post(baseURL, {
                                    "page":String(index)
                                })
                                .then((response) => {
                                    console.log(response.data)
                                    _this.setState({list:response.data})
                                    console.log(list);
                                })
                                .catch((err)=>{
                                    console.log(err);
                                });
                        }}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default  ShowText;
