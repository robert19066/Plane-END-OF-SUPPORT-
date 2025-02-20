document.addEventListener('DOMContentLoaded', () => {
  const fetchData = () => {
    fetch('/src/code/test.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => updateContainer(data))
      .catch(error => displayError(error.message));
  };

  const updateContainer = (data) => {
    const container = document.getElementById('container');
    if (container) {
      container.innerHTML = ''; // Clear previous content
      data.forEach(element => {
        const newElement = document.createElement(element.name);
        newElement.innerHTML = element.string;
        if (element.attributes) {
          setAttributes(newElement, element.attributes);
        }
        container.appendChild(newElement);
      });
    } else {
      console.error('Container element not found.');
    }
  };

  const setAttributes = (element, attributesString) => {
    const attributes = attributesString.split(' ');
    attributes.forEach(attr => {
      const [key, value] = attr.split('=');
      if (key === 'class' && value) {
        // Handle multiple classes
        element.className = value.replace(/['"]+/g, '');
      } else if (value) {
        element.setAttribute(key, value.replace(/['"]+/g, ''));
      }
    });
  };

  const displayError = (message) => {
    const errorContainer = document.getElementById('error-container');
    if (errorContainer) {
      errorContainer.innerHTML = `<p style="color: red;">Error: ${message}</p>`;
    } else {
      console.error('Error container element not found.');
    }
  };

  fetchData(); // Initial fetch

  // Add a button to manually refresh
  document.getElementById('update-button').addEventListener('click', fetchData); 

  // Automatically update every 5 seconds (5000 milliseconds)
  setInterval(fetchData, 1500);
});
