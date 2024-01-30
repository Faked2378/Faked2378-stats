const fs = require('fs');
const axios = require('axios');

async function updateStats() {
  try {
    const response = await axios.get('https://api.github.com/users/Faked2378');
    const { followers, public_repos, contributions } = response.data;

    const stats = `
    # GitHub Stats

    ![GitHub Stats](https://github-readme-stats.vercel.app/api?username=Faked2378&show_icons=true)

    - Followers: ${followers}
    - Public Repositories: ${public_repos}
    - Contributions: ${contributions}
    `;

    fs.writeFileSync('README.md', stats.trim());
    console.log('Stats updated successfully.');
  } catch (error) {
    console.error('Error updating stats:', error.message);
  }
}

updateStats();
