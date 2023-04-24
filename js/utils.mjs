async function apiFetch(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export const getData = async () => {
    const data = await apiFetch('https://motorsapi.onrender.com/cars');
    // const data = await apiFetch('http://localhost:3535/cars');
    localStorage.setItem('cars', JSON.stringify(data));
}

export const getParam = (param) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get(param);
    return product;
}

export const renderWithTemplate = (template, parentElement, data, callback) => {
    parentElement.insertAdjacentHTML('afterbegin', template);
    if (callback) {
        callback(data);
    }
}

export const loadTemplate = async (path) => {
    let response = await fetch(path);
    const result = await response.text();
    return result;
}

// function to dynamically load the header and footer into a page
export const loadHeaderFooter = async () => {
    const headerTemplate = await loadTemplate('/motors/partials/header.html');
    const headerElement = document.querySelector('#main-header');

    const footerTemplate = await loadTemplate('/motors/partials/footer.html');
    const footerElement = document.querySelector('#main-footer');

    renderWithTemplate(headerTemplate, headerElement);
    renderWithTemplate(footerTemplate, footerElement);
}

export const loadNav = async () => {
    const navTemplate = await loadTemplate('/motors/partials/navigation.html');
    const navElement = document.querySelector('#main-nav');

    renderWithTemplate(navTemplate, navElement);
}
