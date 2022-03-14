echo "Iniciando deploy..."
git pull origin master
pkill node -9
node cd.js