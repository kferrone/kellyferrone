#!/bin/bash

echo $_CLASPRC > $HOME/.clasprc.json

cat <<EOT > .clasp.json
{"scriptId":"$_SCRIPT_ID","projectId": "$PROJECT_ID"}
EOT

clasp run 'setProperties' --params '[{"firebaseEmail":"'"$_FIREBASE_EMAIL"'","firebaseKey":"'"$_FIREBASE_KEY"'"}]'