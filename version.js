/*

    lvkaszusWebsite-React --- version: 4.2
    
            Set Version Script

      Designed and written by: @lvkaszus
             (https://lvkasz.us)
             
*/

export const getVersion = () => {
    return import.meta.env.VITE_APP_VERSION || '4.21';
};