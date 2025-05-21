FROM ubuntu:22.04

RUN apt-get update && \
    apt-get install -y bash sudo coreutils tree nano

# Copier les fichiers simulés
COPY files/ /

# Créer l'utilisateur sleeper
RUN useradd -ms /bin/bash sleeper && \
    chown -R sleeper:sleeper /home/sleeper

USER sleeper
WORKDIR /home/sleeper

# Rendre le script exécutable
RUN chmod +x /home/sleeper/unlock.sh

# Exécuter le script unlock.sh au démarrage et garder le conteneur en vie
CMD ["/bin/bash", "-i", "-c", "/home/sleeper/unlock.sh; exec /bin/bash"]
