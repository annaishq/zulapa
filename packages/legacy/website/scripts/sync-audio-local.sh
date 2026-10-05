#!/usr/bin/env bash
set -euo pipefail
# Mirror cached MP3s from S3 to ./audio/ (same layout as CI). Requires AWS CLI credentials on your machine.
# Usage: AWS_REGION=us-east-1 S3_AUDIO_BUCKET=my-bucket ./scripts/sync-audio-local.sh

: "${S3_AUDIO_BUCKET:?set S3_AUDIO_BUCKET}"
REGION="${AWS_DEFAULT_REGION:-${AWS_REGION:-}}"
if [ -z "$REGION" ]; then
  echo "set AWS_REGION or AWS_DEFAULT_REGION" >&2
  exit 1
fi
export AWS_DEFAULT_REGION="$REGION"

mkdir -p audio
aws s3 sync "s3://${S3_AUDIO_BUCKET}/audio/" ./audio/
echo "Synced to ./audio/"
