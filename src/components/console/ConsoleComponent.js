import { useState } from 'react'
import { Table } from 'antd';
import {console_columns,  demo_data} from "./ConsoleConfigs"

export const ConsoleComponent = () => {
  return <Table columns={console_columns} dataSource={demo_data} />;
}