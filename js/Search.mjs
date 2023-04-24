export default class Search {
    constructor(keyword) {
        this.keyword = keyword;
        this.data = JSON.parse(localStorage.getItem('cars'));
    }

    buildSearch(parentElement) {        
        for (let i = 0; i < this.data.length; i++) {
            if (this.keyword) {
                if (!this.data[i].Make.toLowerCase().includes(this.keyword.toLowerCase())) {
                    continue;
                }
            }
            const wrapper = document.createElement('div');
            const name = document.createElement('h2');
            const desc = document.createElement('p');
    
            name.textContent = `${this.data[i].Make} ${this.data[i].Model}`;
            desc.textContent = this.data[i].Description;
    
            wrapper.appendChild(name);
            wrapper.appendChild(desc);
            parentElement.appendChild(wrapper);
        }
    }
}