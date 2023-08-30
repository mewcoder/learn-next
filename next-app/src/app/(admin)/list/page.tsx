'use client';

import React, { useEffect, useState } from 'react';
import { Button, Space, Table } from 'antd';
import { useRouter } from 'next/navigation';
const { Column } = Table;
interface DataItem {
  id:string;
  title: string;
  body: string;
  userId: number;
}

export default function List() {
  const [dataList, setDataList] = useState<DataItem[]>([]);

  const router = useRouter();

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(resp => resp.json())
      .then(data => setDataList(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  function toDetail(id: string) {
    router.push(`list/${id}`);
  }

  return (
    <div className="p-12">
      <Table dataSource={dataList} scroll={{ y: 400 }}  rowKey="id" className="w-[1000px]">
        <Column title="ID" dataIndex="id" key="id" width={100} />
        <Column
          title="标题"
          dataIndex="title"
          key="title"
          width={200}
          ellipsis
        />
        <Column title="内容" dataIndex="body" key="body" width={300} ellipsis />
        <Column title="用户ID" dataIndex="userId" key="userId" width={100} />
        <Column
          title="操作"
          key="action"
          render={(_: unknown, record: DataItem) => (
            <Space size="small">
              <Button type="link" onClick={() => toDetail(record.id)}>
                详情
              </Button>
              <Button type="link">编辑</Button>
              <Button type="link">删除</Button>
            </Space>
          )}
        />
      </Table>
    </div>
  );
}
