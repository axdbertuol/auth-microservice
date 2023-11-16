#!/usr/bin/env bash
set -e

/opt/wait-for-it.sh postgres:5432
npm run migration:generate src/database/migrations/UpdateUserDefaultProvider
npm run migration:run
npm run seed:run
npm run start:debug
