"use client"
import React from 'react';

const HomePage = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('/test')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);
  console.log(data)
  return (
    <div>
      <h1>Hello from Next.js!</h1>
      {data && <p>{data.message}</p>}
    </div>
  );
};

export default HomePage;