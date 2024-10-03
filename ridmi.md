# 1. Cambiar a la rama main
git checkout main

# Si la rama main no existe localmente, créala desde master
git checkout -b main master

# 2. Empujar la rama main al remoto
git push origin main

# 3. (Opcional) Eliminar la rama master si ya no la necesitas
git branch -d master
git push origin --delete master


--------------------- GITHUB IMPORT --------------------------

# Config History
Instalar node.js, npm
create-react-app
npm install react-router-dom
npm install react modal
npm install -g sass