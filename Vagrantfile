Vagrant.configure("2") do |config|
  config.vm.box_check_update = false
  config.vm.box = "generic/debian12"

  config.vm.define "vm1" do |vm1|
    vm1.vm.network "private_network", ip: "192.168.33.10"
    vm1.vm.provider "virtualbox" do |vb|
      vb.memory = 2048
    end
    vm1.vm.synced_folder "./", "/vagrant_data"

    vm1.vm.provision "shell", inline: <<-SHELL
      apt-get update
      apt install software-properties-common
      add-apt-repository --yes --update ppa:ansible/ansible
      apt install -y ansible
      sudo apt-get install -y sshpass
      SHELL
  end

  config.vm.define "vm2" do |vm2|
    vm2.vm.network "private_network", ip: "192.168.33.11"
    vm2.vm.provider "virtualbox" do |vb|
      vb.memory = 1024
    end
    vm2.vm.provision "shell", inline: <<-SHELL
      sudo apt-get install -y sshpass
    SHELL
  end
end
