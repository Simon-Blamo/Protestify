ip addr show eth0 > ip.txt
ip_addr=$(node get_ip.js)
npx concurrently "cd ../backend && rails s --binding=$ip_addr -p 3001" "ng serve --host=$ip_addr --disable-host-check --port 3000"