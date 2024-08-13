Vagrant.configure("2") do |config|
  config.vm.define "vm1" do |vm1|
    vm1.vm.box = "ubuntu/jammy64"
    vm1.vm.network "private_network", ip: "192.168.33.10"
    vm1.vm.provider "virtualbox" do |vb|
      vb.memory = 1024
    end
  end

  config.vm.define "vm2" do |vm2|
    vm2.vm.box = "ubuntu/jammy64"
    vm2.vm.network "private_network", ip: "192.168.33.11"
    
    # Use NFS para hosts Linux/Mac
      vm2.vm.synced_folder ".", "/vagrant_data", type: "nfs"

    # Descomente a linha seguinte e comente a linha acima se você estiver no Windows
    # vm2.vm.synced_folder ".", "/vagrant_data", type: "smb"

    vm2.vm.provider "virtualbox" do |vb|
      vb.memory = 4096
    end

    vm2.vm.provision "shell", inline: <<-SHELL
      curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
      sudo apt-get install -y nodejs
      cd /vagrant_data
      npm install
      npm start &
    SHELL
  end
end