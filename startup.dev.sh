#!/usr/bin/env bash
set -e

/opt/wait-for-it.sh postgres:5432
npm run migration:run
npm run seed:run
/opt/wait-for-it.sh maildev:1080
npm run start:debug
