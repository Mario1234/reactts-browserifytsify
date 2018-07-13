# reactts-browserifytsify
Pagina web que genera animaciones a partir de sprites en formato png. Escrita en TypeScript con la libreria React para agilizar el refresco de los elementos DOM y transcompilada con tsify y despues con browserify. 

**---INSTALL---**

Install node js in your pc


open powershell

change powershell actual directory to project directory

cd reactts-browserifytsify

run commands:

npm install -g browserify

npm install tsify

npm install --save-dev typescript@2.9.1 (or) npm install --save-dev typescript

npm install --save react react-dom @types/react @types/react-dom


run this command to transcompile from TypeScript in React to plain JavaScript

browserify principal.tsx -p [ tsify --noImplicitAny ] > comprimido.js


Install Apache Tomcat 9 server in your pc, in desktop folder


search line `<h3>Recommended Reading:</h3>` into index.jsp which is in:

C:\Users\ElPutoAmo\Desktop\apache-tomcat-9.0.6\webapps\ROOT

behind these line add this line:

`<h4><a href="${tomcatDocUrl}tsReactSprite.html">TSReactSprite</a></h4>`


Copy files from despliegueTomcat folder to tarjet directory:

C:\Users\ElPutoAmo\Desktop\apache-tomcat-9.0.6\webapps\docs


**---RUN---**

run server startup bat file startup.bat which is in:

C:\Users\ElPutoAmo\Desktop\apache-tomcat-9.0.6\bin


open web browser and enter `localhost:8080` as URL tarjet
