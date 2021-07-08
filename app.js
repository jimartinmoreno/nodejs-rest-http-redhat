'use strict';

/*
 *
 *  Copyright 2016-2017 Red Hat, Inc, and individual contributors.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', express.static(path.join(__dirname, 'public')));
// Expose the license.html at http[s]://[host]:[port]/licences/licenses.html
app.use('/licenses', express.static(path.join(__dirname, 'licenses')));

app.use('/api/greeting', (request, response) => {
  const name = request.query ? request.query.name : undefined;
  response.send({"data":[{"value": "DirectCostsId","b2x": "return \"Direct costs\";","verbalization": "Direct costs"},{"value": "IndirectCostsId","b2x": "return \"Indirect costs\";","verbalization": "Indirect costs"},{"value": "Other","b2x": "return \"Other\";","verbalization": "Other"}]});
});

app.use('/api/scopeOrCategory', (request, response) => {
  const name = request.query ? request.query.name : undefined;
  response.send({"data":[{"value": "DirectCostsId","b2x": "Direct costs","verbalization": "Direct costs"},{"value": "IndirectCostsId","b2x": "Indirect costs","verbalization": "Indirect costs"},{"value": "Other","b2x": "Other","verbalization": "Other"},{"value": "Other RR","b2x": "Other RR","verbalization": "Other RR"}]});
});

app.use('/api/roles', (request, response) => {
  const name = request.query ? request.query.name : undefined;
  response.send({"data":[{"value": "Area_Customer_Experience_Manager", "b2x": "Area Customer Experience Manager", "verbalization": "Area Customer Experience Manager"}, {"value": "Area_Managing_Director", "b2x": "Area Managing Director", "verbalization": "Area Managing Director"}, {"value": "CEO_Ocean_and_Logistics", "b2x": "CEO Ocean and Logistics", "verbalization": "CEO Ocean and Logistics"}, {"value": "Global_Head_of_Contract_Logistics", "b2x": "Global Head of Contract Logistics", "verbalization": "Global Head of Contract Logistics"}, {"value": "Global_Head_of_Logistics_and_Services_Product", "b2x": "Global Head of Logistics and Services Product", "verbalization": "Global Head of Logistics and Services Product"}, {"value": "Hamburg_Sud_Area_CS_Manager", "b2x": "Hamburg Sud Area CS Manager", "verbalization": "Hamburg Sud Area CS Manager"}, {"value": "Head_of_Contract_Products", "b2x": "Head of Contract Products", "verbalization": "Head of Contract Products"}, {"value": "Head_of_Ocean_Product", "b2x": "Head of Ocean Product", "verbalization": "Head of Ocean Product"}, {"value": "Regional_Managing_Director", "b2x": "Regional Managing Director", "verbalization": "Regional Managing Director"}]});
});

module.exports = app;
