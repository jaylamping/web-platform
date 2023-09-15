import axios from 'axios';

console.log(import.meta.env.VITE_DB_SERVICE_URL);

export const getMatchups = async () => {
  try {
    const matchups = await axios.post('http://localhost:4000', {
      query: `
            query {
                getUpcomingMatchups {
                    name
                    id
                    primaryStream
                }
            }
        `,
    });
    return matchups.data.data.getUpcomingMatchups;
  } catch (err) {
    console.log(err);
  }
};
