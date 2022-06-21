import React from 'react';
import { List } from 'xbrcl';
import { mockData } from '../../mockData/listData';

/**
 * List component
 * @component
 * @type {React.FC<Props>}
 * @returns {React.ReactElement} List component
 * @example
 * const data = [{ label: 'HUBID/3643, id: '62947f50729c3d79fa3c1111', icon: <HomeIcon />, category: 'Hub' }]
 * const boxLabel = 'Select Facility'
 * const multipleList = boolean
 * options returns category field of option
 * const placeholder = 'Select'
 * const freeSolo = boolean
 * const template returns JSX
 * return (
 *          <List
 *              data={mockData}
 *              boxLabel='Select Hub'
 *              multipleList
 *              onChange={handleChange}
 *              options={options}
 *              placeholder='Select'
 *              freeSolo
 *              template={template}
 *          />
 * )
 */

const ListContainer = () => {
  const [value, setValue] = React.useState([]);

  /**
   * return event on selecting any list item.
   * @param   {event} event  event triggered by user
   * @param   {Array} newValue  values containing list items
   */

  const handleChange = (event, newValue) => {
    Array.isArray(newValue) ? setValue(newValue) : setValue([newValue]);
  };

  /**
   * reurns category from data available
   * @param   {Array} option  details of list item
   * @return  {string} category of the list item
   */

  const options = mockData.map((option) => {
    return {
      category: option.category,
      ...option,
    };
  });

  /**
   * return template for list item
   * @param   {Array} option  First Name of the User
   * @param   {String} selected   Last Name of the User
   * @return  {JSX}  template for list items
   */

  const template = (props, option, selected) => {
    return (
      <div style={{ display: 'flex' }}>
        <div>{option.icon}</div>
        <div>{option.label}</div>
      </div>
    );
  };
  return (
    <div>
      <h3>List:</h3>
      <div>
        Selected values: {(value || []).map((item) => item?.label).join(',')}
      </div>
      <br />
      <List
        data={mockData}
        boxLabel='Select Hub'
        multipleList
        onChange={handleChange}
        options={options}
        placeholder='Select'
        freeSolo
        value={value}
        template={template}
      />
    </div>
  );
};

export default ListContainer;
