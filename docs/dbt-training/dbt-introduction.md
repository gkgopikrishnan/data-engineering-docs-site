---
sidebar_position: 1
---

# Introduction to DBT

DBT (Data Build Tool) allows you to write SQL `SELECT` statements, also known as **models**. These models are then executed as `CREATE TABLE` or `CREATE VIEW` commands in your data warehouse.

## Key Features:

- **Model Execution**: DBT executes the models you write as `CREATE TABLE` or `CREATE VIEW` in your data warehouse.
- **Dependency Management**: DBT tracks the dependencies between models and executes them in the correct order to ensure your data pipeline works seamlessly.
- **Testing**: You can write tests to validate the integrity of your data and models.
- **Documentation**: DBT allows you to document your models for better understanding and future reference.
- **Data Lineage**: DBT generates data lineage visuals to give you a clear picture of how data flows through your models.

## Example:

```sql
-- Example DBT Model
SELECT 
    employee_id,
    first_name,
    last_name,
    hire_date
FROM 
    raw_data.employees
WHERE 
    hire_date > '2020-01-01';
