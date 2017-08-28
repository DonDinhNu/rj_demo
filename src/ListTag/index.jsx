import React from 'react';

const ListTag = ({tags}) => (
  <div className='todo-list'>
    {tags.map(tag => <span className='tag-span'>{tag}</span>)}
  </div>
);

export default ListTag;
