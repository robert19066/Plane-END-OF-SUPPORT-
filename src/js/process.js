document.addEventListener('DOMContentLoaded', () => {
    const fetchData = () => {
      fetch('/src/code/test.json')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          const container = document.getElementById('container');
          if (container) {
            container.innerHTML = ''; // Clear previous content
            data.forEach(element => {
              const newElement = document.createElement(element.name);
              newElement.innerHTML = element.string;
              if (element.attributes) {
                element.attributes.split(' ').forEach(attr => {
                  const [key, value] = attr.split('=');
                  newElement.setAttribute(key, value.replace(/['"]+/g, ''));
                });
              }
              container.appendChild(newElement);
            });
          } else {
            console.error('Container element not found.');
          }
        })
        .catch(error => console.error('Error fetching or parsing JSON:', error));
    };
  
    fetchData(); // Initial fetch
  
    document.getElementById('update-button').addEventListener('click', fetchData); // Add a button to manually refresh
  });
  