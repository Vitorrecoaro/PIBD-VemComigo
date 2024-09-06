-- This script update Caronista table.
ALTER TABLE caronista ADD COLUMN IF NOT EXISTS     ValidadeCNH VARCHAR(24) NOT NULL;