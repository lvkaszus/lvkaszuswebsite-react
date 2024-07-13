FROM node:lts-slim

WORKDIR /lvkaszuswebsite-react

RUN apk add --no-cache tzdata
ENV TZ="Europe/Warsaw"


ENV AUDIOPLAYER_SONG_FILE="/files/music/luuzz-intro_paraneujahr_160bpm.mp3"
ENV AUDIOPLAYER_SONG_NAME="+𝕃𝕦𝕦ℤ𝕫+ - Intro Paraneujahr 160Bpm @ K7Stendal 31.12.22"


COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["sh", "start.sh"]