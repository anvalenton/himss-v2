DROP DATABASE IF EXISTS spamdb

CREATE DATABASE spamdb

\c spamdb;

DROP TABLE IF EXISTS spam

CREATE TABLE spam
(
  id SERIAL PRIMARY KEY,
  ticket_id text NOT NULL,
  source text NOT NULL,
  source_identity_id text NOT NULL,
  reference_id text NOT NULL,
  reference_type text NOT NULL,
  ticketstate text NOT NULL,
  payload_source text NOT NULL,
  payload_report_type text NOT NULL,
  payload_message text,
  payload_report_id text NOT NULL,
  paylod_ref_resource_id text NOT NULL,
  paylod_ref_resource_type text NOT NULL,
  payload_created text NOT NULL

);

--USE INDEX?
--SPLIT TABLES?