# Exercise ioasys

## Installation steps

1. `docker-compose up -d`
2. `cp .env.example .env`
3. `npm install`
4. `npm run db:create`
5. `npm run db:migrate`

## Development

- `docker-compose up -d`
- `npm run db:seed`
- `docker-compose exec db psql -d exercise -U root`

## Author

- David Costa
