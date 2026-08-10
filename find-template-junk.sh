#!/bin/bash

echo "====================================="
echo "Template Content Scan"
echo "====================================="
echo

PATTERNS=(
  "Pathak"
  "Josh Pathak"
  "Ujjwal"
  "ujjwal"
  "DeveloperFolio"
  "Stony Brook"
  "StonyBrook"
  "SBU"
  "IIIT"
  "Thoughtworks"
  "Silicon Labs"
  "Silabs"
  "Atos"
  "Accern"
  "Saayahealth"
  "saadpasta"
  "@saad"
  "Open for new Opportunities"
  "assistant.google"
  "twitter"
  "podcast"
  "google code"
  "Google Assistant"
  "Ramaiah"
  "Oracle Certified"
)

for PATTERN in "${PATTERNS[@]}"
do
  echo
  echo "===== $PATTERN ====="
  grep -Rni \
    --exclude-dir=node_modules \
    --exclude-dir=build \
    --exclude-dir=static \
    --exclude="*.backup*" \
    "$PATTERN" \
    src public . 2>/dev/null
done

echo
echo "====================================="
echo "Done"
echo "====================================="
