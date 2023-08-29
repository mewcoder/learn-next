'use client';

import { Card, Button, Form, Input, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

export default function Todos() {
  const [messageApi, contextHolder] = message.useMessage();
  async function onFinish(val: any) {
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(val)
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.code === '0') {
          messageApi.success('登录成功!');
        }
      })
      .catch(() => {
        messageApi.error('登录失败!');
      });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {contextHolder}
      <Card title="登录" bordered={false} style={{ width: 500 }}>
        <Form onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="用户名" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
