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
              const attributes = element.attributes.split(' ');
              attributes.forEach(attr => {
                const [key, value] = attr.split('=');
                if (key === 'class' && value) {
                  // Handle multiple classes
                  newElement.className = value.replace(/['"]+/g, '');
                } else if (value) {
                  newElement.setAttribute(key, value.replace(/['"]+/g, ''));
                }
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

  // Add a button to manually refresh
  document.getElementById('update-button').addEventListener('click', fetchData); 

  // Automatically update every 5 seconds (5000 milliseconds)
  setInterval(fetchData, 1500);
});
