import { LoadingOutlined } from '@ant-design/icons';

export default function Loading() {
  return (
    <div className='flex items-center'>
      <LoadingOutlined className='mr-2' />
      loading...
    </div>
  );
}
