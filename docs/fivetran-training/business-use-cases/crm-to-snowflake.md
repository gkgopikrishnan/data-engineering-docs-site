# 📊 CRM to Snowflake Using Fivetran

## 🔗 Overview

Fivetran provides a fully managed connector to sync data from various **CRM systems** to **Snowflake**. It automates schema creation, incremental updates, and handles changes without manual intervention.

---

## 💡 Supported CRM Sources

- Salesforce
- HubSpot
- Zoho CRM
- Microsoft Dynamics 365
- Pipedrive
- Freshsales

---

## 🔄 Data Flow: CRM → Fivetran → Snowflake

1. **Fivetran Connector Setup** for your CRM system
2. **Fivetran pulls data** using CRM's APIs
3. **Fivetran syncs data** into Snowflake
4. **Tables auto-created** based on selected CRM objects
5. Optionally **transform** data using dbt in Snowflake

---

## 🛠️ Steps to Configure

### ✅ Step 1: Set Up Source (CRM)
- Go to Fivetran dashboard → **Add Connector**
- Choose your CRM (e.g., Salesforce)
- Authenticate via OAuth or API token
- Select CRM objects (e.g., Leads, Contacts, Opportunities)

### ✅ Step 2: Configure Destination (Snowflake)
- Provide:
  - **Account Name** (e.g., `xy12345.ap-south-1`)
  - **Warehouse**
  - **Database**
  - **Schema**
  - **Username/Password** or use **Key-Pair Auth**

### ✅ Step 3: Sync Settings
- Choose sync frequency (e.g., every 15 minutes)
- Enable history mode (optional)
- Enable or disable transformations (dbt)

---

## 🗂️ Snowflake Table Layout Example

```text
<schema_name>
  ├── salesforce__contact
  ├── salesforce__lead
  ├── salesforce__opportunity
  └── ...
