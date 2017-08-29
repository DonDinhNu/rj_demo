import React from 'react';

const ListTag = ({tags}) => (
  <div className='todo-list'>
    {tags.map(tag => <span className='tag-span' key={tag}>{tag}</span>)}
  </div>
);

export default ListTag;
