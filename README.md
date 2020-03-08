# Exercise ioasys

## Development

- `docker-compose up -d`
- `cp .env.example .env`
- `npm install`
- `npm run db:create`
- `npm run db:migrate`
- `npm run db:seed`
- `docker-compose exec db psql -d exercise -U root`

## Testing

- `docker run --rm --name postgres-test -e POSTGRES_USER=root -e POSTGRES_PASSWORD=123 -p 5432:5432 postgres`
- `npm run test`

## Author

- David Costa
