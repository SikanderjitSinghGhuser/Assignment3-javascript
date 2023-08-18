
const url = 'https://sikanderjitsinghghuser.github.io/ExampleJson/student.json';

let displayContent = document.querySelector('.content');

async function getData() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        let htmlContent = '';
        data.forEach(item => {
            htmlContent += `
                <h2>${item.name}</h2> 
                <img src="${item.image}" 
                alt="${item.name}" />
                <p>${item.description}</p>
            `;
        });

        displayContent.innerHTML = htmlContent;
        console.log(data);
    } catch (error) {
        console.error('There was a problem fetching the data:', error);
    }

}

// Call getData as soon as the script loads
getData();
