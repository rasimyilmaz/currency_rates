"# currency_rates" 
cd /var/www/html
sudo git clone https://github.com/rasimyilmaz/currency_rates.git
sudo chown pi:pi currency_rates -R
sudo chmod +x currency_rates/get_currency_rates.sh
