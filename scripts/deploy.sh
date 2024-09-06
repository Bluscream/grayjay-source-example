#!/bin/sh
DOCUMENT_ROOT=/var/www/sources

# Take site offline
echo "Taking site offline..."
touch $DOCUMENT_ROOT/maintenance.file

# Swap over the content
echo "Deploying content..."
mkdir -p $DOCUMENT_ROOT/example-source
cp build/icon.png $DOCUMENT_ROOT/example-source
cp build/config.json $DOCUMENT_ROOT/example-source
cp build/script.js $DOCUMENT_ROOT/example-source
sh sign.sh $DOCUMENT_ROOT/example-source/script.js $DOCUMENT_ROOT/example-source/config.json

# Notify Cloudflare to wipe the CDN cache
echo "Purging Cloudflare cache for zone $CLOUDFLARE_ZONE_ID..."
curl -X POST "https://api.cloudflare.com/client/v4/zones/$CLOUDFLARE_ZONE_ID/purge_cache" \
     -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
     -H "Content-Type: application/json" \
     --data '{"files":["https://plugins.grayjay.app/example-source/icon.png", "https://plugins.grayjay.app/example-source/config.json", "https://plugins.grayjay.app/example-source/script.js"]}'

# Take site back online
echo "Bringing site back online..."
rm $DOCUMENT_ROOT/maintenance.file
