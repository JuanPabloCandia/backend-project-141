FROM ubuntu:latest

RUN apt-get update
RUN apt-get install -yq curl make build-essential

RUN apt-get install -yq --no-install-recommends \
    libwoff1 \
    libopus0 \
    # libwebp6 \
    libwebpdemux2 \
    # libenchant1c2a \
    libgudev-1.0-0 \
    libsecret-1-0 \
    libhyphen0 \
    libgdk-pixbuf2.0-0 \
    libegl1 \
    libnotify4 \
    libxslt1.1 \
    # libevent-2.1-6 \
    libgles2 \
    # libvpx5 \
    libxcomposite1 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libepoxy0 \
    libgtk-3-0 \
    libharfbuzz-icu0

RUN apt-get install -yq --no-install-recommends \
    libnss3 \
    libxss1 \
    libasound2-dev \
    fonts-noto-color-emoji \
    libxtst6

RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

RUN npm config -g set update-notifier false
# NOTE: в некоторых случаях может понадобится, чтобы не возникла ошибка Permission error
# Возникает при записи кеша, логов и т.д, так как npm работает от пользователя node,
# который не имеет прав записи в домашней директории текущего пользователя root
RUN chmod a+rw -R /root

RUN curl https://cli-assets.heroku.com/install.sh | sh

ENV PLAYWRIGHT_BROWSERS_PATH=0

WORKDIR /project
RUN mkdir /project/code

COPY . .
