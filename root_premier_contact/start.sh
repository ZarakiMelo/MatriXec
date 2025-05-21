#!/bin/bash

echo "[+] Construction du conteneur..."
docker build -t root-premier-contact .

echo "[+] Lancement du challenge..."
docker run -it --rm root-premier-contact
