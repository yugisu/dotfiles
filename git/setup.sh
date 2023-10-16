#!/bin/sh
set -x

(echo ""; echo "[include]"; echo "  path = \"$PWD/.gitconfig\"") >> ~/.gitconfig