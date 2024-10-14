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
npm install css-loader style-loader postcss-loader --save-dev
npm install swiper
git init
git add .
git status 
git commit -m "mensaje"
git remote add origin https://github.com/tu-usuario/tu-repositorio.git
git branch
git pull origin branch-name
git push origin branch-name
ngrok config add-authtoken 2nLS3Bc3UzGKpvvfaPrtcTQxMb5_2foCs3kEMA3x64ewRY6P5
ngrok http http://localhost:3000