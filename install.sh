#!/bin/bash

source_dir="$( dirname "${BASH_SOURCE[0]}" )/../@tinychange/new-react-lib/template/"
if [[ "$1" == "" ]]
then
  read -p 'Enter your lib name: ' project_name
else
  project_name=$1
fi

echo "Creating the lib..."
cp -r $source_dir $project_name
cp -r $source_dir"../README.md" $project_name

cd $project_name
git init
mv gitignore .gitignore
mv npmignore .npmignore

echo "Running yarn install..."
yarn install


echo "Done."
echo "To run your project: cd $project_name && yarn dev"
