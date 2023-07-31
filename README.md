# lvkaszusWebsite-React

- https://lvkasz.us - Core Source Code of my public website (React + Vite. lvkaszusSocialMediaAPI that is installed on my website is not included, but you can make your own using for example FastAPI, Telethon, integration with Instagram API etc.)


## Installation

If you want to deploy this website on your own server, follow these steps:

- Get a domain name and a server with preferably Linux installed on it. For free, you can get a server using Oracle Cloud and get up to 4 cores and 24GB of RAM to use on ARM64 architecture (overkill for this project, but if you want to deploy some other applications than that, it can be useful!)

- Point your domain name to your server by editing DNS records in your domain registrar. You can use Cloudflare DNS for this. If you want to use Cloudflare, you must change the NS records in your domain registrar pointing to Cloudflare (NS1: xxxxx.ns.cloudflare.com   NS2: xxxxx.ns.cloudflare.com) and then change the main DNS records (A, CNAME etc.) in Cloudflare Dashboard to point to your server. You also will get free SSL/TLS certificate for your domain.

- Log into your new server using SSH.

- Update the package lists and packages on your system. For example: `sudo apt update && sudo apt upgrade`

- Install NVM package using `curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash`
  
  Also, execute commands that are displayed after installation of NVM:
  ```
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
  [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
  ```

- Install Node using `nvm install node`
 
- Finally after installing all required packages, you can begin installing all project packages using: `npm install`

- Recommended: Check if everything is running correctly by running `npm run dev` and entering URL displayed by Vite Development Server in your browser.

- If everything is running correctly, you can terminate Vite Development Server by using `Ctrl+C` on your keyboard and begin building sources by using this command: `npm run build`

- When building sources completed, just move all contents of the `dist/` folder to your nginx webserver index directory - for example: `/var/www/html`

- And thats it! You can now install your SSL/TLS certificate to NGINX and finish setup of some other things.


## Credits
- This project uses React library. (https://github.com/facebook/react)
- This project uses Vite library. (https://github.com/vitejs/vite)
- This project uses Axios library. (https://github.com/axios/axios)
- This project uses i18n for React library. (https://github.com/i18next/react-i18next)
- This project uses Font Awesome for React library. (https://github.com/FortAwesome/react-fontawesome)
- This project uses Fira Code font. (https://github.com/tonsky/FiraCode)
