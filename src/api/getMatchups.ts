import axios from 'axios';

const url: string = import.meta.env.VITE_DB_SERVICE_URL;

export const getMatchups = async () => {
  try {
    const matchups = await axios.post(url, {
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
