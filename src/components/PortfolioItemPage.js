import React from 'react';

const PortfolioItemPage = (props) => {
  console.log(props);
  return (
    <div>This is portfolio item {props.match.params.id}</div>
  );
};

export default PortfolioItemPage;