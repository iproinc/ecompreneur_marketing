#!/bin/bash

echo "Start to deploy on staging server http://staging.ecompreneur.net/"

ssh deploy@18.224.47.65 'cd apps/ecompreneur/shared/public; git pull'

