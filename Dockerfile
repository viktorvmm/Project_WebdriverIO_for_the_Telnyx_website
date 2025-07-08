FROM node:18

# Встановлення браузерів
RUN apt-get update && \
    apt-get install -y wget gnupg2 && \
    # Chrome
    wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google-chrome.list && \
    apt-get update && \
    apt-get install -y google-chrome-stable && \
    # Firefox
    apt-get install -y firefox-esr && \
    # Edge
    wget https://packages.microsoft.com/keys/microsoft.asc -O- | apt-key add - && \
    echo "deb [arch=amd64] https://packages.microsoft.com/repos/edge stable main" > /etc/apt/sources.list.d/microsoft-edge.list && \
    apt-get update && \
    apt-get install -y microsoft-edge-stable && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY . .

RUN npm ci

ENTRYPOINT ["npm", "run", "test:chrome"] 