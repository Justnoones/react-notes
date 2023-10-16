import React, { memo, useState } from 'react';

const App = () => {
  let [ userName, setUserName ] = useState("");
  let [ age, setAge ] = useState(0);
  // name log every time state changes | rerender
  // but age only log when age is changed
  return (
    <section>
      <figure>
        <figcaption>Name : {userName}</figcaption>
        <input type="text" onChange={e => setUserName(e.target.value)} />
      </figure>
      <figure>
        <figcaption>age : {age}</figcaption>
        <input type="text" onChange={e => setAge(e.target.value)} />
      </figure>
      <LogUserName userName={userName} />
      <LogAge age={age} />
    </section>
  )
}


const LogUserName = (userName) => {
  console.log(userName);
  return true;
}

const LogAge = memo(function LogAge(age) {
  console.log(age);

});

export default App