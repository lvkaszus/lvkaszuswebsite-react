#!/bin/sh

#
#    lvkaszusWebsite-React --- version: 4.2
#    
#        Express Server Configuration
#
#       For serving website static files
#
#      Designed and written by: @lvkaszus
#             (https://lvkasz.us)
#

env | while IFS='=' read -r key value; do
  if [[ $key == "AUDIOPLAYER_SONG_FILE" || $key == "AUDIOPLAYER_SONG_NAME" ]]; then
    echo "VITE_${key}=\"${value}\""
  fi
done > .env

echo "[lvkaszusWebsite-React]   Starting building source files. Please wait!"
npm run build

if [ $? -eq 0 ]; then
  echo "[lvkaszusWebsite-React]   Source files built successfully!"
  node server.cjs
else
  echo "[lvkaszusWebsite-React]   FAILED TO BUILD SOURCE FILES!"
fi