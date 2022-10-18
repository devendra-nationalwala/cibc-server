#! /bin/bash
mongoimport --host localhost --db cibc --collection transactions --type json --file ./transactions.json --jsonArray