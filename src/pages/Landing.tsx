import axios from 'axios';
import { useEffect, useState } from 'react';

type Ad = {
  id: string;
  headline: string;
  brief: string;
};

const Landing = () => {
  const [ads, setAds] = useState<Ad[]>([]);
  const url = 'https://links.api.jobtechdev.se/joblinks';

  const fetchAds = async () => {
    const resp = await axios(url);

    console.log(resp.data.hits);

    const res = resp.data.hits;
    setAds(res);
  };

  useEffect(() => {
    fetchAds();
  }, []);

  return (
    <div>
      {ads.map((ad) => {
        const { id, headline, brief } = ad;
        return (
          <div key={id}>
            <h2>{headline}</h2>
            <p>{brief}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Landing;
