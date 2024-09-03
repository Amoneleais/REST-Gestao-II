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
      sudo apt install software-properties-common
      sudo apt install pipx
      pipx ensurepath
      sudo pipx ensurepath --global
      sudo pipx install --include-deps ansible

      ssh-keygen -t rsa -b 4096 -N '' -f /home/vagrant/.ssh/id_rsa
      cat /home/vagrant/.ssh/id_rsa.pub >> /home/vagrant/.ssh/authorized_keys
      chmod 600 /home/vagrant/.ssh/authorized_keys

      sshpass -p 'vagrant' ssh-copy-id -o StrictHostKeyChecking=no vagrant@192.168.33.11
    SHELL
  end

  config.vm.define "vm2" do |vm2|
    vm2.vm.box = "ubuntu/jammy64"
    vm2.vm.network "private_network", ip: "192.168.33.11"
    vm2.vm.provider "virtualbox" do |vb|
      vb.memory = 1024
    end
  end

  config.vm.define "vm2" do |vm2|
    vm2.trigger.after :up do
      run "vagrant ssh vm1 -c 'sshpass -p \"vagrant\" ssh-copy-id -o StrictHostKeyChecking=no vagrant@192.168.33.11'"
    end
  end

end
