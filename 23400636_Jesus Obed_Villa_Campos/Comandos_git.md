1-  git config  
  configura tus credenciales e informacion de ususario  
  Ejemplo: git config --global user.name "Obed"  
2-  git init   
  Crea una nueva carpeta con el nombre del repositorio que a su vez contiene otra  
  Ejemplo: git init <nombre-repositorio>
3-  git clone   
  Descarga una copia exacta de un repositorio remoto  
  Ejemplo: git clone https://github.com/Obed/proyecto-proyecto.git  
4-  git add  
  Añade cambios a la zona de "intercambio temporal"  
  Ejemplo: git add index.html  
           git add.  
5-  git commit  
Guarda la foto o instantanea de tus cambios en el historial local  
Ejemplo: git commit -m "feat: se agrega el boton de inicio de sesion"  
6-  git status   
  Te muestra el estado actual de tu directorio de trabajo.  
  Te dice qué archivos has modificado  
  Ejemplo: git status
7-  git log (para historial de versiones)
  Muestra el histoiral completo de commits realizados en el repositorio, con sus autores  
  Ejemplo: got log --oneline  
8-  git show  
  Muestra  los datos de un commit, muestra al usuario el dia, hora y el mensaje del ultimo commit asi como las diferencias con el anterior  
  Ejemplo: git show <comit>  
9-  git annotate  
  Muestra el contenido de un fichero anotado cada linea con informacion de l commit en el que se introdujo  
  Ejemplo: git annotate
10- git diff  
  Te muestra la diferencia exacta linea por linea entre los archivos que modificaste y su ultima version guardada  
  Ejemplo: git diff  
11- git checkout  
  Te permite saltar de una rama a otra o restaurar archivos especificos a un estado anterior  
  Ejemplo: git checkout nueva-funcion  
12- git reset (cambios de la zona de intercambio temporal)  
  Deshace cambios. Puede usarse  para sacar archivos del area de preparacion o para regresae el historial a un commit anterior borrando lo que hiciste despues  
  Ejemplo: git reser --hard HEAD~1  
13- git fetch  
  Descarga el historial y la informacion del repositorio remoto  
  Ejemplo: git fetch origin  
14- git branch  
15- git log (para listado de ramas)  
16- git merge  
17- git rebase  
18- git remote  
19- git pull  
20- git push  
