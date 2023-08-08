import React, { useState, useEffect} from 'react';
import logo from './logo.svg';
import '@chatui/core/es/styles/index.less';
import '@chatui/core/dist/index.css';
import './App.css';
import { Layout } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ChatSider from './page/ChatSider';
import {useMessages} from '@chatui/core';
const App: React.FC<{}> = () =>{
  const [value, setValue] = useState('');
  const changeRichText = (val: string) => {
    setValue(val);
  }
  useEffect(() => {
    setMessages({...messages, content: {...messages.content, html: value}});
  }, [value])
  const [messages, setMessages] = useState(
    {
      type: 'richText',
      content: { html: '<p>Hello</p>' }
    }
  );
  return (
    <>
    <div style={{display: 'flex'}}>
      <div style={{width: '60%', marginRight: '20px', height: '100vh'}}>
        <ReactQuill theme='snow' value={value} onChange={changeRichText} style={{height: '100vh'}}/>
      </div>
      <div>
        <ChatSider message={messages}/>
      </div>
    </div>
    </>
  )
}


export default App;
