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

## Testing

- `docker run --rm --name postgres-test -e POSTGRES_USER=root -e POSTGRES_PASSWORD=123 -p 5432:5432 postgres`
- `npm run test`

## Author

- David Costa
