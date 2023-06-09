"# currency_rates" 
cd /var/www/html
sudo git clone https://github.com/rasimyilmaz/currency_rates.git
sudo chown pi:pi currency_rates -R
sudo chmod +x currency_rates/get_currency_rates.sh
sudo apt install apache2
sudo update-rc.d apache2 defaults
sudo usermod -a -G www-data pi
