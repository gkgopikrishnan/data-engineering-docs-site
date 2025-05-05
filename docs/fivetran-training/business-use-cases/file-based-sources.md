# 📂 File-Based Sources to Snowflake Using Fivetran

## 🔗 Overview

Fivetran supports automated ingestion of structured and semi-structured files (CSV, JSON, Excel, etc.) from cloud storage platforms directly into Snowflake. This enables seamless data ingestion pipelines with minimal setup and maintenance.

---

## 🌐 Supported File Storage Platforms

- Amazon S3  
- Google Cloud Storage (GCS)  
- Microsoft Azure Blob Storage  
- SFTP  
- FTPS  
- Dropbox  
- Box  

---

## 🔄 Data Flow: File Storage → Fivetran → Snowflake

1. **Files dropped** into cloud storage (e.g., S3 bucket)  
2. **Fivetran connector** monitors and ingests new/updated files  
3. **Files parsed and loaded** into Snowflake tables  
4. **Auto-scheduling** and deduplication supported  

---

## 🛠️ Steps to Configure

### ✅ Step 1: Set Up File Storage Source

- Go to Fivetran Dashboard → **Add Connector**  
- Choose file source (e.g., S3)  
- Provide access credentials:
  - IAM Role / Access Key for AWS  
  - Shared keys for Azure  
  - OAuth for Dropbox or Box  
- Define file path or wildcard (e.g., `invoices/*.csv`)  

### ✅ Step 2: Configure Destination (Snowflake)

- Provide:  
  - **Account Name** (e.g., `xy12345.ap-south-1`)  
  - **Warehouse**  
  - **Database**  
  - **Schema**  
  - **Role and Credentials**  

### ✅ Step 3: Schema Mapping

- Auto-detect headers and data types (CSV, JSON)  
- Optionally map columns manually  
- Support for custom delimiter, encoding, line terminator, etc.  

### ✅ Step 4: Sync Settings

- Set sync frequency  
- Choose file processing strategy:  
  - **Process once and ignore future changes**  
  - **Rescan and update if file content changes**  

---

## 📁 Example: Folder Structure on S3

```text
s3://your-bucket/data/
  ├── employees_2024_01.csv
  ├── employees_2024_02.csv
  └── employees_2024_03.csv
```

---

## 🧩 Key Features

| Feature               | Description                                      |
|-----------------------|--------------------------------------------------|
| 🔄 Auto-Ingestion      | No-code, continuous sync                         |
| 🧠 Intelligent Parsing | Schema detection and type conversion             |
| ⏱️ Scheduled Syncs     | Customizable frequency                           |
| 🧹 Data Cleaning       | Null trimming, deduplication                     |
| 🔐 Secure Connection   | Encrypted file access and credential management  |
| 🛠️ Flexible Formats    | CSV, JSON, TSV, Excel, Parquet                   |

---

## 📘 Additional Resources

- [Fivetran File Connector Docs](https://fivetran.com/docs/files)  
- [Amazon S3 to Snowflake Setup Guide](https://fivetran.com/docs/files/s3)  
- [Advanced File Parsing in Fivetran](https://fivetran.com/docs/files/configure-file-connector)  
- [Azure Blob to Snowflake Setup](https://fivetran.com/docs/files/azure-blob)  
- [Google Cloud Storage to Snowflake](https://fivetran.com/docs/files/gcs)  
- [SFTP File Connector Guide](https://fivetran.com/docs/files/sftp)  
- [Dropbox File Connector Setup](https://fivetran.com/docs/files/dropbox)  
- [File Processing Options in Fivetran](https://fivetran.com/docs/files/processing)  
- [Fivetran Data Lakes Overview](https://fivetran.com/docs/data-lakes)  


