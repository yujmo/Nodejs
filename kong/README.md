安装部署kong、kong-ui
===
    sudo docker run -d --name kong-database -p 9042:9042 cassandra:3

    sudo docker run -d --name kong  --link kong-database:kong-database \
    -e "KONG_DATABASE=cassandra" -e "KONG_CASSANDRA_CONTACT_POINTS=kong-database" \
    -e "KONG_PG_HOST=kong-database" -p 8000:8000 -p 8443:8443 \
    -p 8001:8001 -p 7946:7946 -p 7946:7946/udp kong:latest

    sudo docker run -d --name kong-ui --restart=always \ 
    --link kong:kong -p 8002:8080 pgbi/kong-dashboard
