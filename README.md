# AnnualMedia Server

This repository now contains the AnnualMedia backend only.

The API is a Node.js and Express service backed by MongoDB. The frontend has
been split into a separate repository and is no longer maintained here.

## Setup

1. Change into `server/`.
2. Install dependencies with `npm install`.
3. Configure the required environment variables.
4. Start the API with `npm run serve`.

## Available Scripts

Run these from `server/`:

- `npm run serve` starts the API with `nodemon`.
- `npm run seed` seeds the database.
- `npm run list-users` lists existing users.
- `npm run update-password -- <email> <newPassword>` updates a user's password.

## Deployment Notes

- Production deploys should use `server/` as the root directory.
- Any deployment filters that still reference the deleted root frontend paths
  should be updated to point at `server/**` instead.
- The active frontend should be deployed from its separate repository.

## Environment Notes

The server currently reads its configuration from environment variables such as
`REACT_APP_PORT`, `REACT_APP_DB_URI`, and `REACT_APP_SECRET`. Those names are
legacy, but they are still the names used by the backend code in this repo.
