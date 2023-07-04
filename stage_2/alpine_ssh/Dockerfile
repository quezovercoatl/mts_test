FROM alpine:3.18
LABEL project=stage_2
LABEL type=frontend
RUN apk update && \
    apk add openssh && \
    rm /var/cache/apk/* && \
    /usr/bin/ssh-keygen -A > /dev/null
COPY ./sshd_config /etc/ssh/sshd_config
COPY ./authorized_keys /root/.ssh/
RUN chmod 600 /root/.ssh/authorized_keys
ENTRYPOINT ["/usr/sbin/sshd", "-D"]
EXPOSE 22
