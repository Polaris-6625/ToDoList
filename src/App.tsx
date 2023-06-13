import { useState } from 'react'
import 'antd/dist/reset.css';
import Menu from "./components/Menu";
import "./App.css"
import Main from "./components/Main";
import {ConfigProvider} from "antd";

function App() {
    // const [theme, setTheme] = useState('light');
    // const checked = theme === 'light';
    //
    // const handleThemeChange = (checked) => {
    //     setTheme(checked ? 'light' : 'dark');
    // };
  return (
    <div>
        <ConfigProvider>
            <Menu></Menu>
            <Main></Main>
        </ConfigProvider>
    </div>
  )
}

export default App
