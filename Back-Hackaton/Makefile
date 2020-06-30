build:
	docker-compose up --build hackathonapi

up:
	docker-compose up -d hackathonapi
down:
	docker-compose down
bash:
	docker exec -it hackathonapi bash
bash-postgres:
	docker exec -it hackathonpostgres bash
db-migrate:
	docker exec -it hackathonapi npx sequelize-cli db:migrate
db-migrate-undo:
	docker exec -it hackathonapi npx sequelize-cli db:migrate:undo
db-create-migrate:
	docker exec -it hackathonapi npx sequelize-cli migration:create --name=create-connections
db-seeders:
	docker exec -it hackathonapi npx sequelize-cli db:seed:all
db-seeders-undo:
	docker exec -it hackathonapi npx sequelize-cli db:seed:undo
run:
	docker rm hackathonapi & docker-compose run  --name hackathonapi --rm --service-ports hackathonapi