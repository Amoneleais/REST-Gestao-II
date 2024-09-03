Vagrant.configure("2") do |config|
  config.vm.define "vm1" do |vm1|
    vm1.vm.box = "ubuntu/jammy64"
    vm1.vm.network "private_network", ip: "192.168.33.10"
    vm1.vm.provider "virtualbox" do |vb|
      vb.memory = 1024
    end
    vm1.vm.synced_folder "./", "/vagrant_data"

    vm1.vm.provision "shell", inline: <<-SHELL
      sudo apt update && sudo apt -y upgrade
      sudo apt install software-properties-common sshpass -y
      sudo apt install pipx
      pipx ensurepath
      sudo pipx ensurepath --global
      sudo pipx install --include-deps ansible
      if [ ! -f /home/vagrant/.ssh/id_rsa ]; then
        ssh-keygen -t rsa -b 4096 -f /home/vagrant/.ssh/id_rsa -N ""
      fi
    SHELL
  end

  config.vm.define "vm2" do |vm2|
    vm2.vm.box = "ubuntu/jammy64"
    vm2.vm.network "private_network", ip: "192.168.33.11"
    vm2.vm.provider "virtualbox" do |vb|
      vb.memory = 1024
    end
  end

  config.vm.define "vm1" do |vm1|
    vm1.vm.provision "shell", inline: <<-SHELL
      sshpass -p "vagrant" ssh-copy-id -i /home/vagrant/.ssh/id_rsa.pub -o StrictHostKeyChecking=no vagrant@192.168.33.11
    SHELL, run: "always"
  end

end
