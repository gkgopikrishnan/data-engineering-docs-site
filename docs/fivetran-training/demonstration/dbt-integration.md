# 🔗 Integrating Fivetran with dbt (Data Build Tool)

Fivetran automates **data ingestion**, while dbt enables **data transformation** on top of your destination (e.g., Snowflake). Together, they form a modern ELT pipeline.

---

## 🧭 Overview

**Fivetran** extracts data from sources and loads it into a destination warehouse.  
**dbt** transforms that raw data into cleaned, modeled data for analytics, reporting, or machine learning.

---

## 🛠️ Prerequisites

- A working Fivetran pipeline (data loaded to warehouse like Snowflake, BigQuery, etc.)
- A dbt project set up locally or in **dbt Cloud**
- Destination schema where Fivetran loads data
- Access to the warehouse (Snowflake, BigQuery, Redshift, etc.)

---

## ⚙️ Steps to Integrate

### ✅ Step 1: Confirm Fivetran Destination Details

- Note the:
  - **Warehouse account name**
  - **Database & Schema**
  - **Role used**
  - **Tables created by Fivetran**

### ✅ Step 2: Initialize a dbt Project

If you haven’t already, create a dbt project:

```bash
dbt init my_project
```

Inside `profiles.yml`, add your connection details:

```yaml
my_profile:
  target: dev
  outputs:
    dev:
      type: snowflake
      account: "{{ env_var('SNOWFLAKE_ACCOUNT') }}"
      user: "{{ env_var('SNOWFLAKE_USER') }}"
      password: "{{ env_var('SNOWFLAKE_PASSWORD') }}"
      role: "{{ env_var('SNOWFLAKE_ROLE') }}"
      database: "{{ env_var('SNOWFLAKE_DATABASE') }}"
      warehouse: "{{ env_var('SNOWFLAKE_WAREHOUSE') }}"
      schema: "{{ env_var('SNOWFLAKE_SCHEMA') }}"
      threads: 4
```

### ✅ Step 3: Model Fivetran Data in dbt

- In your dbt `models/` directory, create models that select and clean data from Fivetran-managed tables.

```sql
-- models/stg_customers.sql
with raw as (
  select * from {{ source('fivetran_schema', 'customers') }}
)

select
  id,
  first_name,
  last_name,
  created_at::timestamp as created_at,
  updated_at::timestamp as updated_at
from raw
```

- Configure sources in `models/schema.yml`:

```yaml
version: 2

sources:
  - name: fivetran_schema
    tables:
      - name: customers
```

### ✅ Step 4: Run dbt

Run transformations with:

```bash
dbt run
```

For testing and documentation:

```bash
dbt test
dbt docs generate
dbt docs serve
```

---

## 🔄 Optional: Automate with dbt Cloud + Fivetran

1. **Link your dbt Cloud account to Fivetran**
   - Go to Fivetran → Connector Settings → **Transformations**
   - Click **Enable dbt Cloud Integration**
   - Provide API Key and Account info

2. **Trigger dbt jobs after Fivetran sync**
   - Define sync-triggered jobs in dbt Cloud
   - Fivetran will automatically trigger dbt after a successful sync

---

## 🎯 Benefits

| Feature              | Description                                 |
|----------------------|---------------------------------------------|
| ✅ Seamless ELT      | Load with Fivetran, transform with dbt      |
| ⏱️ Auto-Orchestration | Fivetran triggers dbt after sync             |
| 📊 Reusable Models   | dbt lets you build modular, tested models   |
| 🔐 Secure Access     | OAuth/Secrets-based authentication           |

---

## 📘 Additional Resources

- [Fivetran + dbt Integration Guide](https://fivetran.com/docs/transformations/dbt-cloud)
- [dbt Documentation](https://docs.getdbt.com/)
- [dbt Cloud Setup](https://docs.getdbt.com/dbt-cloud/cloud-quickstart)
- [Fivetran Transformations Overview](https://fivetran.com/docs/transformations)

---

💡 Use Fivetran for ingestion and dbt for transformation to build clean, scalable pipelines with zero manual effort!
