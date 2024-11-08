ci:
	docker-compose -f docker-compose.yml run app make setup
	docker-compose -f docker-compose.yml up --abort-on-container-exit

compose-setup: compose-build compose-app-setup

compose-build:
	docker-compose build

compose-app-setup:
	docker-compose run app make setup

compose-bash:
	docker-compose run --service-ports app bash

compose-lint:
	docker-compose run app make lint

compose-test:
	docker-compose -f docker-compose.yml up --abort-on-container-exit

compose-code-setup:
	docker-compose run app make code-setup

compose-code-build:
	docker-compose run app make code-build

compose:
	docker-compose up

compose-down:
	docker-compose down -v --remove-orphans

setup:
	npm install
	cp -n code/.env.example .env || true
	npm install -C code
	npm run build -C code

test:
	npx playwright test

lint:
	npx eslint --no-eslintrc --config .eslintrc.yml .

code-start:
	make -C code start

code-setup:
	make -C code setup

code-build:
	make -C code build

code-console:
	make -C code console
