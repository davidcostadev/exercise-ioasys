# Exercise ioasys

## Requirements

- **Nodejs** 12
- **Docker** 19.03.5 (recommended)

## Common steps

- `npm install`
- `cp .env.example .env`

## Production

- Create the database ex: `psql -c "create database exercise_prod"`
- `npm run preprod:db:migrate`
- `npm run start`

## Development

- `docker-compose up -d`
- `npm run db:create`
- `npm run db:migrate`
- `npm run db:seed`
- `npm run dev`

## Testing

- `docker run --rm --name postgres-test -e POSTGRES_PASSWORD=123 -p 5432:5432 -d postgres:latest`
- `npm run test`
- `docker stop postgres-test`

## Endpoints

| METHOD   | URL                                 | params/queries                                 |
| -------- | ----------------------------------- | ---------------------------------------------- |
| **POST** | `/api/v1/users/auth/sign_in`        | `{ email: string, password: string}`           |
| **GET**  | `/api/v1/enterprises`               | `{ enterprise_types?: number, name?: string }` |
| **GET**  | `/api/v1/enterprises/:enterpriseId` | `enterpriseId: number`                         |

## Diagram

[![diagram](/database_diagram.png)](database_diagram.png)

## Helpers

### Accessing postgres on docker-compose

- `docker-compose exec db psql -d exercise_dev`

## Author

- David Costa
