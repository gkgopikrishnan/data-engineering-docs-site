---
id: architecture-overview
title: Fivetran Architecture and Components
---

# Fivetran Architecture and Components

This section explains how Fivetran moves data from source systems to destination platforms, outlines the key architectural components that power this flow, and highlights the built-in support for security, compliance, and transformation using dbt.

---

## How Fivetran Moves Data: Source to Destination

Fivetran follows a streamlined **Extract → Load → Transform (ELT)** pipeline to move data:

1. **Connect**: Fivetran uses connectors to securely connect to source systems like SaaS tools, databases, and file storage systems.
2. **Extract**: It extracts raw data using APIs, queries, or Change Data Capture (CDC) where available.
3. **Load**: Raw data is loaded directly into the target data warehouse or lake (e.g., Snowflake, BigQuery).
4. **Transform** *(optional)*: Data transformation is handled post-load, typically using tools like **dbt**.

This ELT approach reduces latency, enhances scalability, and allows analysts to work with the freshest data.

---

## Core Components

### ✅ Connectors

- Fivetran provides **600+ fully managed connectors** to integrate data from various SaaS platforms, databases, and file storage systems.
- Each connector is regularly maintained and updated to accommodate changes in source APIs or schemas.
- Connectors are categorized by source type:
  - **Applications**: Salesforce, HubSpot, Marketo
  - **Databases**: PostgreSQL, MySQL, SQL Server
  - **Files**: Google Sheets, Amazon S3, FTP

### 🔄 Sync Mechanism

- **Incremental Sync**: By default, Fivetran uses incremental syncing to reduce data load volumes and improve efficiency.
- **Change Data Capture (CDC)**: For databases that support CDC, Fivetran captures row-level changes (inserts, updates, deletes) using transaction logs.
- **Scheduling**: Syncs can be configured to run on a custom schedule (e.g., every 5 minutes, hourly, daily).
- **Automatic Retry**: Failed syncs are retried with exponential backoff and detailed logs for diagnostics.

### 🏢 Data Warehousing Support

Fivetran supports direct data loading into modern cloud data warehouses:
- **Snowflake**
- **BigQuery**
- **Amazon Redshift**
- **Databricks**
- **Azure Synapse**

Support includes:
- Automatic schema creation
- Partitioning and clustering recommendations
- Data type mapping and conversion

### 🧬 Schema Management

- Fivetran handles **schema drift** automatically:
  - Detects changes in the source schema
  - Applies changes in the destination (e.g., new columns, renamed fields)
- Options include:
  - **Auto-mapping** of new fields
  - **Column blocking** to ignore unwanted fields
  - **Custom transformations** to clean or standardize fields

---

## Security and Compliance Standards

Fivetran is built with **enterprise-grade security** at its core:

- **End-to-End Encryption**: Data is encrypted in transit and at rest.
- **Role-Based Access Control (RBAC)**: Fine-grained access control for sensitive data.
- **Certifications and Compliance**:
  - **SOC 1 Type II**
  - **SOC 2 Type II**
  - **ISO/IEC 27001**
  - **HIPAA**
  - **GDPR**
  - **HITRUST**
  - **PCI DSS Level 1**
- **Data Residency**: Ability to choose data processing regions to comply with regulatory requirements.

---

## Integration with dbt for Data Transformation

Fivetran seamlessly integrates with **dbt (Data Build Tool)** to support transformation workflows after loading:

- Supports both **dbt Core** and **dbt Cloud**.
- Trigger dbt models to run post-sync for near real-time analytics readiness.
- Helps implement modular, version-controlled, and testable transformation logic.
- Fivetran enables automatic invocation of dbt jobs after sync completion via webhooks or API triggers.

Benefits of dbt + Fivetran:
- Simplifies post-load transformations using SQL
- Enhances governance with lineage and documentation
- Promotes code reuse and collaboration among data teams

---

[Back to Fivetran TOC](/docs/fivetran-training/fivetran-table-of-contents)
