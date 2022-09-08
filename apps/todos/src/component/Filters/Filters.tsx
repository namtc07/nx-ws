import { Input, Radio } from 'antd';
import React from 'react';

function Filters() {
  return (
    <div>
      <div>
        <Radio.Group>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </div>
      <div style={{ marginTop: '16px' }}>
        <Input.Search placeholder="Type search todo" type="text" />
      </div>
    </div>
  );
}

export default Filters;
