all: down up

init:
	@docker-compose rm -f
	@docker-compose build --force-rm

start:
	@docker-compose stop
	@docker-compose up -d

stop:
	@docker-compose stop
down:
	@docker-compose down
up:
	@docker-compose up -d

log:
	@docker-compose logs -f

clean:
	@docker-compose down --rmi all
	@docker system prune -f
	@docker volume prune -f