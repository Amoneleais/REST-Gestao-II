## API para recuperar títulos de jogos eletrônicos

Para instalar as dependências da API rode o comando "npm install"

Para rodar execute o comando "npm start"

## Vagrant

Para iniciar as VMs e testar a comunicação entre elas por meio de uma requisição na API siga os seguintes comandos:

- Com seu terminal navegue até o diretório onde está localizada a aplicação
- Execute o comando "vagrant up" com Vagrant e VirtualBox já instalados
- Aguarde as duas máquinas serem iniciadas
- No mesmo terminal execute o comando "vagrant ssh vm1" para acessar o terminal da máquina 1
- Execute um "curl http://192.168.33.11:3001/api/games"
- A API irá retornar uma lista com os jogos inseridos na memória
