FROM ubuntu:20.04
LABEL type=backend_summ
ENV DEBIAN_FRONTEND=noninteractive \
    TZ=Europe/Samara
RUN apt update && apt install -y \
    tzdata \
    apache2=2.4.41-4ubuntu3.14 \
    php7.4 \
    libapache2-mod-php7.4 && \
    rm -rf /var/cache/apt/*
COPY calc.php /var/www/html/
EXPOSE 80
ENTRYPOINT ["apachectl", "-D", "FOREGROUND"]
