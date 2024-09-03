## API para recuperar títulos de jogos eletrônicos

Para instalar as dependências da API rode o comando "npm install"

Para rodar execute o comando "npm start"

## Ansible e Vagrant 

Para iniciar as VMs e testar a comunicação entre elas por meio de uma requisição na API siga os seguintes comandos:

- Com seu terminal navegue até o diretório onde está localizada a aplicação
- Execute o comando "vagrant up" com Vagrant e VirtualBox já instalados
- Aguarde as duas máquinas serem iniciadas
- No mesmo terminal execute o comando "vagrant ssh vm1" para acessar o terminal da máquina 1
- Execute "~/.ssh" para navegar até a pasta das chaves ssh da vm1
- Execute "ssh-copy-id vagrant@192.168.33.11" para copiar as chaves públicas para a vm2
- Navegue até a pasta do projeto com "cd /opt/vagrant/"
- Agora execute o playbook com o comando "ansible-playbook -i inventory.ini configura-node.yml"
- Execute um "curl http://192.168.33.11:3001/api/games"
- A API irá retornar uma lista com os jogos inseridos na memória
