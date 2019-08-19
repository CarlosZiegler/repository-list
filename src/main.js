import api from './api';

class App {

    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');

        this.inputEl = document.querySelector('input[name=repository]');

        this.lisEl = document.getElementById('repo-list');

        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    setLoading(loading=true){
        if (loading === true){
        let loadingEl = document.createElement('span');
        loadingEl.appendChild(document.createTextNode('Loading'));
        loadingEl.setAttribute('id','loading');

        this.formEl.appendChild(loadingEl);
        }else {
            document.getElementById('loading').remove();
        }
    }

    async addRepository(event) {
        //not reload page after form submited
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if (repoInput.length === 0) {
            return;
        }

        this.setLoading();

        try {


            const response = await api.get(`/repos/${repoInput}`);

            const {name, description, owner: {avatar_url}, html_url} = response.data;


            

            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url
            });

            this.inputEl.value = '';

            this.render();
        }catch (e) {
            alert('The Repository not exist!');
        }

        this.setLoading(false);
    }

    render() {
        this.lisEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Accessar'));

            let listItemEl = document.createElement('li');

            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.lisEl.appendChild(listItemEl);
        });
    }

}

new App();