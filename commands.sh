#!/bin/bash
git checkout develop -- release
cp -r release/* .
rm -rf release
