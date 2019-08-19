import axios from 'axios';

class Api {
    static async getUserInfo(username){
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            const {name , bio , repos_url } = response.data;
            console.log(`Name: ${name}\nBio: ${bio}\nRepos: ${repos_url}\n`);

        } catch (e) {
            console.warn(`Error -> ${e}`);
        }

    }
}

Api.getUserInfo('CarlosZieglerasas');