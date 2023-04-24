async function apiFetch(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const getData = async () => {
    const data = await apiFetch('https://motorsapi.onrender.com/cars');
    console.log(data);
};

getData();