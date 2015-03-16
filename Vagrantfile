Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"

  config.vm.network "forwarded_port", guest: 1337, host: 1337

  config.vm.synced_folder "srv/", "/srv/"

  config.vm.provision :salt do |salt|
    salt.minion_config = "srv/minion"
    salt.run_highstate = true
  end

end
