# Exercise ioasys

## Common steps

- `npm install`
- `cp .env.example .env`

## Development

- `docker-compose up -d`
- `npm run db:create`
- `npm run db:migrate`
- `npm run db:seed`
- `npm run dev`

## Testing

- `docker run --rm --name postgres-test -e POSTGRES_USER=root -e POSTGRES_PASSWORD=123 -p 5432:5432 -d postgres`
- `npm run test`
- `docker stop postgres-test`

## Endpoints

| METHOD   | URL                                 | params/queries                                 |
| -------- | ----------------------------------- | ---------------------------------------------- |
| **POST** | `/api/v1/users/sign_in`             | `{ email: string, password: string}`           |
| **GET**  | `/api/v1/enterprises`               | `{ enterprise_types?: number, name?: string }` |
| **GET**  | `/api/v1/enterprises/:enterpriseId` | `enterpriseId: number`                         |

## Helpers

### Accessing postgres

- `docker-compose exec db psql -d exercise -U root`

## Author

- David Costa
