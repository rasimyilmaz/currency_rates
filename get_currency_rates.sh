#http://www.compciv.org/recipes/cli/downloading-with-curl/
#https://unix.stackexchange.com/questions/463807/how-to-clear-chromium-browser-cache
rm -rf ~/.cache/chromium
curl https://www.tcmb.gov.tr/kurlar/today.xml --output /var/www/html/currency_rates/today.xml -s
