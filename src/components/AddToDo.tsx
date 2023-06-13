import { Input } from "antd"

export default function AddToDo() {
    return (
        <div className="add-block_Main">
            <div className="add-block__title">
                <h1>新建</h1>
            </div>
            <Input placeholder="事件" />
            <Input placeholder="时间" />
        </div>
    )
}