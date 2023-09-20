const ErrorComponent = () => {
  const div = document.createElement('div');
  div.innerHTML = `
      <div>
        <h1>Error</h1>
        <p>Load Failure</p>
      </div>
    `;
  return div;
};

export { ErrorComponent };
