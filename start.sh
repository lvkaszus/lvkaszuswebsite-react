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

echo "[lvkaszusWebsite-React]   Setting environment variables..."

export VITE_AUDIOPLAYER_SONG_FILE=${AUDIOPLAYER_SONG_FILE}
export VITE_AUDIOPLAYER_SONG_NAME=${AUDIOPLAYER_SONG_NAME}

echo "[lvkaszusWebsite-React]   Environment variables set!"


echo "[lvkaszusWebsite-React]   Starting building source files. Please wait!"

npm run build

if [ $? -eq 0 ]; then
  echo "[lvkaszusWebsite-React]   Source files built successfully!"
  node server.cjs
else
  echo "[lvkaszusWebsite-React]   FAILED TO BUILD SOURCE FILES!"
fi
