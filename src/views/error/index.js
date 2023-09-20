const ErrorComponent = errorMessage => {
  const div = document.createElement('div');
  div.innerHTML = `
      <div>
        <h1>Error</h1>
        <p>${errorMessage}</p>
      </div>
    `;
  return div;
};

export { ErrorComponent };
