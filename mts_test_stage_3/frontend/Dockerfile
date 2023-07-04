FROM ubuntu:20.04
LABEL type=frontend
ENV TZ=Europe/Samara 
RUN apt update && apt install -y \
    nginx=1.18.0-0ubuntu1.4 \
    php7.4 \
    php7.4-fpm \
    php7.4-curl && \
  rm -rf /var/cache/apt/*
RUN mkdir -p /run/php-fpm && \
    chgrp -R www-data /run/php-fpm && \
    echo "daemon off;" >> /etc/nginx/nginx.conf && \
    rm -f /etc/nginx/sites-enabled/*
COPY calculation.conf /etc/nginx/sites-enabled/
COPY website/ /var/www/html/
CMD php-fpm7.4 -D ; nginx
EXPOSE 80
