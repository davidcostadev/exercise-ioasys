#!/bin/bash

echo "Waiting for database"
until nc -z -v -w30 db 5432
do
  echo "Waiting for database connection..."
  # wait for 5 seconds before check again
  sleep 5
done

echo -e "\ndatabase ready"

