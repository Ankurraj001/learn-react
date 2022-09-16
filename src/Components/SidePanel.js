import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Data from './Data';
import { Tooltip } from '@mui/material';
import './SidePanel.css';

export default function ColorTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        className='tab-class'
      >
        {Data.map((data, index)=> {
          return <Tab key={index} value={data.value} icon={<Tooltip title={data.tooltip} arrow><div>{data.icon}</div></Tooltip>}/>
        })}
      </Tabs>
    </Box>
  );
}