import React from 'react';

const App = () => {
  // filteredItems rerendered when the filter state changes but not when the theme state changes
  let [ filterStatus, setFilterStatus ] = React.useState('');
  let [ theme, setTheme ] = React.useState(true);
  let realTheme = theme ? 'Light' : 'Dark';
  const filteredItems = React.useMemo(() => {
    console.log('filteredItems function rendered');
    let items = [
      {
        name: 'todo 1',
        active: true
      },
      {
        name: 'todo 2',
        active: false
      },
      {
        name: 'todo 3',
        active: true
      },
      {
        name: 'todo 4',
        active: true
      },
      {
        name: 'todo 5',
        active: true
      },
      {
        name: 'todo 6',
        active: false
      },
      {
        name: 'todo 7',
        active: false
      },
      {
        name: 'todo 8',
        active: true
      }
    ];
    let rv = items;
    if (filterStatus === 'active') {
      rv = items.filter(items => items.active === true);
    } else if (filterStatus === 'completed') {
      rv = items.filter(items => items.active !== true);
    }
    return rv;
  }, [filterStatus]);
  return (
    <>
      <h1>{realTheme} Theme</h1>
      <button onClick={() => setTheme(ps => !ps)}>Theme Toggler</button>
      <select onChange={e => setFilterStatus(e.target.value)}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
      {filteredItems.map(item => (
        <p key={item.name}>{item.name} - status : {item.active ? 'active' : 'completed'}</p>
      ))}
    </>
  )
};

export default App