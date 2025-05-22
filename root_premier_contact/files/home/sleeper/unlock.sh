#!/bin/bash


MATRIX_GREEN='\033[38;5;34m'  # Vert Matrix plus foncé
NC='\033[0m' # No Color

# Activer la couleur verte Matrix
echo -e "${MATRIX_GREEN}"

clear
sleep 1
echo ">>> Connexion entrante..."
sleep 2
echo ">>> Décryptage du flux..."
sleep 2
echo ">>> Canal sécurisé établi."
sleep 1
echo
echo "=== Transmission entrante ==="
sleep 1
echo
echo "MORPHEUS :"
sleep 1
echo "\"Bienvenue dans le monde réel.\""
sleep 2
echo
echo "\"Je suppose que pour toi, c'est encore difficile à croire.\""
sleep 2
echo "\"Ce monde... la Matrice... est une illusion. Un programme conçu pour t'aveugler.\""
sleep 2
echo
echo "\"Mais je vais te faire une offre. Une seule...\""
sleep 1
echo

# Demande du nom de l'utilisateur
read -p "Quel est ton nom, Agent ? " AGENT_NAME    
sleep 1
echo
echo "\"Très bien, Agent $AGENT_NAME.\""
sleep 1
echo "\"Tu es ici parce que tu sais que quelque chose ne tourne pas rond. Tu le sens.\""
sleep 2
echo
echo "\"Tu es prêt à connaître la vérité.\""
sleep 1
echo
echo "Mais avant, il te faut prouver que tu es capable de voir au-delà du voile."
sleep 2
echo
echo "Une commande spéciale a été dissimulée dans ce système."
echo "Ta mission : 🧩 la retrouver et l'exécuter."
sleep 2
echo
echo "Elle te permettra de faire un choix..."
sleep 2
echo
echo "🔵 Prendre la pilule bleue : fin de l'histoire. Tu te réveilles dans ton lit, et tu crois ce que tu veux croire."
sleep 2
echo "🔴 Prendre la pilule rouge : rester au Pays des Merveilles, et voir jusqu'où va le terrier du lapin."
sleep 2
echo
echo "\"Souviens-toi : je ne t'offre que la vérité. Rien de plus.\""
sleep 2
echo
echo "Bonne chance, Agent $AGENT_NAME."
echo "Morpheus, terminé."
sleep 1
echo
echo "=== Fin de transmission ==="
echo

# Désactiver la couleur
echo -e "${NC}"

# Renommer l'utilisateur sleeper
sudo usermod -l "$AGENT_NAME" sleeper
sudo usermod -d /home/"$AGENT_NAME" -m "$AGENT_NAME"
sudo groupmod -n "$AGENT_NAME" sleeper

# Changer vers le nouveau répertoire home
cd /home/"$AGENT_NAME"

