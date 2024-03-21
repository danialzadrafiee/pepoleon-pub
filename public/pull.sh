#!/bin/bash
cd /var/www/pepoleon.developerpie.com || exit
unset GIT_DIR
git pull origin main 2>&1 