import { useState, useEffect } from 'react';
import axios from 'axios';

const NpmPackageInfo = ({ packageName }) => {
  const [packageInfo, setPackageInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPackageInfo = async () => {
      try {
        const response = await axios.get(`https://registry.npmjs.org/${packageName}`);
        const { name, time, versions, description } = response.data;

        const latestVersion = versions[Object.keys(versions).pop()];
        const latestVersionDate = time[latestVersion.version];

        // Fetch download counts
        const downloadsResponse = await axios.get(`https://api.npmjs.org/downloads/point/last-month/${packageName}`);
        const downloads = downloadsResponse.data.downloads;

        setPackageInfo({
          name,
          latestVersion: latestVersion.version,
          latestVersionDate,
          description,
          downloads,
        });
      } catch (err) {
        setError('Error fetching package information');
      }
    };

    fetchPackageInfo();
  }, [packageName]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!packageInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="npm-snipet">
      <h4>{packageInfo.name}</h4>
      <p><strong>Description:</strong> {packageInfo.description}</p>
      <p><strong>Latest Version:</strong> {packageInfo.latestVersion}</p>
      <p><strong>Published on:</strong> {new Date(packageInfo.latestVersionDate).toLocaleDateString()}</p>
      <p><strong>Downloads last month:</strong> {packageInfo.downloads}</p>
    </div>
  );
};

export default NpmPackageInfo;
