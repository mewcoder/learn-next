'use client';

import { useState } from 'react';
import { Card, Button, Form, Input, Spin, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [messageApi, contextHolder] = message.useMessage();

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function onFinish(val: any) {
    setLoading(true);
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(val)
    })
      .then(resp => resp.json())
      .then(data => {
        setLoading(false);
        if (data.code === '0') {
          messageApi.success('登录成功!');
          setTimeout(() => {
            router.push('/list');
          });
        } else {
          messageApi.error(data.msg);
        }
      })
      .catch(() => {
        setLoading(false);
        messageApi.error('登录失败!');
      });
  }

  return (
    <>
      {contextHolder}
      <Spin spinning={loading}>
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
      </Spin>
    </>
  );
}
