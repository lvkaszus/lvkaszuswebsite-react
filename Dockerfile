FROM node:current-alpine3.19

WORKDIR /lvkaszuswebsite-react

ENV TZ="Europe/Warsaw"


ENV AUDIOPLAYER_SONG_FILE="/files/music/rebelion_vertile-numb.mp3"
ENV AUDIOPLAYER_SONG_NAME="Rebelion & Vertile - Numb"


COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["sh", "start.sh"]