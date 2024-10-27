# BTC India Webiste

The repo contains code of BTC India Website, one of the biggest bitcoin focussed event in the Asia. 

# Setting up

Setup the `env` first before running the project. All the env variables are listed below

### Frontend

| Variable                | Description       |
| ----------------------- | ----------------- |
| DOMAIN                  | domain of webiste |
| NEXT_PUBLIC_BACKEND_URI | Backend URI       |

### Backend

| Variable           | Description                                  |
| ------------------ | -------------------------------------------- |
| EMAIL              | email                                        |
| PASSWORD           | password                                     |
| NOTIFICATION_EMAIL | email to which notification need to sent on. |
| PORT               | Port number to run backend (5000)            |
| MONGO_TEST_URI     | mongo connection string (test)               |
| MONGO_PROD_URI     | mongo connection string (production)         |
| BACKEND_URI        | Backend URI                                  |



## Running (Dev)

For both backend and frontend run this command in their individual folder in the separate terminals.

1. Install dependencies

   `npm i`
2. Run in dev mode

```
   npm run dev
```

## Deployment

1. For frontend:

   ```
   npm run biuld
   ```
2. For backend:

   ```
   npm run build
   ```

   ```
   npm run deploy
   ```

## TroubleShooting

If the database is not connecting check the URI and the network configuration in the Atlas cloud

## Contributing

All sorts of contributions are welcomed, be it improving the code or Readme
