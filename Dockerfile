FROM nginx:alpine

COPY storybook-static/storybook /usr/share/nginx/html/storybook
COPY build-site /usr/share/nginx/html
COPY configs/nginx /etc/nginx
