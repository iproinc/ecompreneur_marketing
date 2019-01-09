#!/bin/bash

echo Start to deploy on first server

ssh deploy@ec2-18-216-230-158.us-east-2.compute.amazonaws.com 'cd apps/ecompreneur/shared/public/ecompreneur_marketing; git pull'

echo Start to deploy on second server

ssh deploy@ec2-18-188-4-39.us-east-2.compute.amazonaws.com 'cd apps/ecompreneur/shared/public/ecompreneur_marketing; git pull'
