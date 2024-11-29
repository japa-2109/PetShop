# PetShop

Versionamento

Git - linhas de comando
Diversionamento local
Manipulação, criação,versões

Instalação
PowerShell 7.4.5
Git 2.46.2

PowerShell
git --version
limpeza - cls
git config --global user.name "Rodrigo"
git config --global user.email "rod_jplocko@hotmail.com"
git config --list
cd desktop/
voltar cd..
criar pasta mkdir projetogit
iniciar o git git init
git status - branch master

vscode
file > open folder > projeto git

git add index.html adicionar arquivo

git add . adiciona todos os arquivos

git commit -m "Criação dos arquivos iniciais"

git log tras todos os commits e quem foi o usuário

git help --all todos os comandos

git commit -help 

git branch - local do projeto que esta sendo trabalhada

criando branch git branch versao2

trocar branch git switch versao2

git branch emergency-fix 

merge 

branch master vai juntar com branch emergency-fix

git merge versao2

git branch -d versao2

Gitignore - ignore o arquivo

notepad.txt

git log --oneline

git commit --amend -m "alteração do arquivo .gitgnore"

git revert HEAD --no--edit

para dar um reset é preciso pegar o código do commit
git log --oneline
git reset 7c65964

vai apagar todo histórico (não realizar o comando quando tiver mais pessaos trabalhando no projeto)

como voltar no arquivo
git reverte 32715646 --no-edit

git stach
descartas as ultimas alterações não commitadas

git giff 421354 6453418
comparação das alterações dos commits


comandos:
commit

branch


Github
Repositorio remoto
cli 
comand line

autenticações por exemplo clonar

token

web

gh -- version

git tag -l
git tag --list

para criar a tag, precisa ter o código do commit pra poder alterar
git tag version /0.1.0 exemplo tag
git tag --online

git giff 
para comparar commits

situações para cira branch direto no repositorio.
pelo terminal e enviar ou do repositorio e trazer para o terminal

git branch dev
git branch
git switch dev
git status
git add .
git commmit -m ""


enviar do terminal para repositorio

git branch
git switch main
git push origin dev

20
22
19


typescript

prototipagem estatica

let num = 3 

compilador que transforma em javascript


npm --version

npm install -g typescript

tsc --version

tsc script.ts

tsc source/script.ts --outDir public

tsc source/script.ts --noEmitOnError

node source/script.js

automatizando typescript


tsc source/script.ts --watchMode

tsc --init arquivo de configuração do typescript

--------------------
tailwind

container propriedades para responsividade:

none = width: 100%
SM = max-width: 640px
MD = max-width: 768px
LG = max-width: 1024px
XL= max-width: 1200px
2XL = max-width: 1536px

Manipulação do display:

display: inline
diplay: inlone-blck
display: block
display: grip
display: flex

class="inline"

class="hidden" (oculta um elemento)

no css tinha flex-direction

elemento: 
flex-col
flex-row

Gap:

gap-2
1 = 4px

justify-content:
justify-center
justify-between
justify-around

Align-itens:
Items-end
Itens-start
items-stretch

Order:

order-first
order-last

Responsividade:
flex flex-col sm:flex-row

Backgroud:

Backgroud-color:
Backgroud-image: url() 
Backgroud-repeat: no-repeat (quando imagem pequena, não repet a foto)
Backgroud-size: tamanho da foto
Backgroud-attacchment:
Bg-cover, ajuste de imagem
bg-contain,  pode acabar esticando a imagem

imagens svg
stroke = alinha do elemento
fill = fundo do elemento

