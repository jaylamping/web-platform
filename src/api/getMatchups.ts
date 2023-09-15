import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

console.log(import.meta.env.DB_SERVICE_URL);

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
