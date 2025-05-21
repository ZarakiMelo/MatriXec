FROM ubuntu:22.04

RUN apt-get update && \
    apt-get install -y bash sudo coreutils tree nano

# Copier les fichiers simulés
COPY files/ /

# Créer un utilisateur "sleeper" avec son home
RUN useradd -ms /bin/bash sleeper && \
    chown -R sleeper:sleeper /home/sleeper

USER sleeper
WORKDIR /home/sleeper

# Rendre le script exécutable
RUN chmod +x /home/sleeper/unlock.sh

# Exécuter le script unlock.sh au démarrage
CMD ["/home/sleeper/unlock.sh"]
