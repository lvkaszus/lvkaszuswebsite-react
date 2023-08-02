/*

    lvkaszusWebsite-React --- version: 4.2
    
              Version Checking
                 
   GitHub version checking for Page Footer!

      Designed and written by: @lvkaszus
             (https://lvkasz.us)
             
*/

import { useEffect, useState } from 'react';

import axios from 'axios';

export const VersionCheck = () => {
  const [latestVersion, setLatestVersion] = useState(['']);

  const fetchLatestVersion = async () => {
    try {
      const gitData = await axios.get('https://api.github.com/repos/lvkaszus/lvkaszuswebsite-react/releases/latest');
      const latestVersion = gitData.data.tag_name;

      setLatestVersion(latestVersion);
    } catch (error) {
      console.error("[lvkaszusWebsite-React] fetchLatestVersion:  Fetch latest release from GitHub  -  ERROR: " + error);
    }
  };

  useEffect(() => {
    fetchLatestVersion();
  }, []);

  const currentVersion = '4.22';
  const isLatestVersion = currentVersion === latestVersion;

  return { currentVersion, latestVersion, isLatestVersion };
};