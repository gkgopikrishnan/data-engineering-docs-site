# 🚀 Setting up Free Trial Account

This guide helps you set up a Fivetran File Connector to ingest files from cloud storage into Snowflake. Ideal for CSV, JSON, Excel, Parquet, and other file-based data ingestion.

---

## 🧪 Step 0: Create a Free Trial Fivetran Account

1. Go to [Fivetran Signup](https://fivetran.com/signup)
2. Sign up using your **work email**
3. Verify your email and **log in to the Fivetran dashboard**
4. You now have access to a **14-day free trial** with full feature access

import React from 'react';

### 🖼️ Trial Dashboard Preview

Once logged in, you'll see a screen similar to this:

<div style={{
  border: '2px solid hsl(247, 43.20%, 34.50%)',  borderRadius: '12px',  padding: '8px',  width:'fit-content',
  display: 'inline-block'
}}>
  <img
    src="/img/ft-account-opening-landing-page.png"
    alt="Fivetran Trial Dashboard"
    style={{
      maxWidth: '100%',
      borderRadius: '8px'
    }}
  />
</div>



> ℹ️ **Note:** If you're running this Markdown in a GitHub repo or static site generator like Docusaurus, make sure the image path above matches your folder structure.

---

## 📂 Step 1: Prepare Your File Source

Choose a source:
- ✅ Amazon S3
- ✅ Azure Blob
- ✅ Google Cloud Storage (GCS)
- ✅ SFTP, FTPS
- ✅ Dropbox, Box

> Setps to set S3 as source: 
> - Create a folder: `s3://your-bucket/my_data/`  
> - Upload test files: `sales.csv`, `employees.json`, etc.  


<div style={{
  border: '2px solid hsl(247, 43.20%, 34.50%)',  borderRadius: '12px',  padding: '8px',  width:'fit-content',
  display: 'inline-block'
}}>
  <img
    src="/img/ft-src-aws-s3-bucket.png"
    alt="Fivetran Trial Dashboard"
    style={{
      maxWidth: '100%',
      borderRadius: '8px'
    }}
  />
</div>

---

## 🔗 Step 2: Set Up File Connector in Fivetran

1. From the dashboard, click ➕ **Add Connector**
2. Search for **"Files"** and select your storage type (e.g., **S3**)

<div style={{
  border: '2px solid hsl(247, 43.20%, 34.50%)',  borderRadius: '12px',  padding: '8px',  width:'fit-content',
  display: 'inline-block'
}}>
  <img
    src="/img/ft-src-aws-s3-conn-target-db.png"
    alt="click ➕ **Add Connector**"
    style={{
      maxWidth: '100%',
      borderRadius: '8px'
    }}
  />
</div>

---

<div style={{
  border: '2px solid hsl(247, 43.20%, 34.50%)',  borderRadius: '12px',  padding: '8px',  width:'fit-content',
  display: 'inline-block'
}}>
  <img
    src="/img/ft-src-aws-s3-conn-target-db-connect.png"
    alt="Connect"
    style={{
      maxWidth: '100%',
      borderRadius: '8px'
    }}
  />
</div>

---

## 🔐 Step 3: Provide Authentication to Your Cloud Storage

To allow Fivetran to access your files stored in a cloud service (like S3), you must set up authentication.

### ✅ Options:

- **IAM Role ARN** (Recommended)
- **Access Key ID + Secret Access Key** (for simpler setups or testing)

---

### Provide Authentication to Your Cloud Storage using **IAM Role ARN** (Recommended)
### 🛠️ Step 1: Create an IAM Policy (for S3)

This policy gives Fivetran read-only access to your S3 bucket.

Example Policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "FivetranS3ReadAccess",
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::your-bucket-name",
        "arn:aws:s3:::your-bucket-name/*"
      ]
    }
  ]
}
```

### 🛠️ Step 1.1: Create an IAM Policy (for S3)

This policy gives Fivetran read-only access to your S3 bucket.

Policy:

<div style={{
  border: '2px solid hsl(247, 43.20%, 34.50%)',  borderRadius: '12px',  padding: '8px',  width:'fit-content',
  display: 'inline-block'
}}>
  <img
    src="/img/ft-src-aws-s3-bucket-pol-permission-json.png"
    alt="Connect"
    style={{
      maxWidth: '100%',
      borderRadius: '8px'
    }}
  />
</div>

### 🛠️ Step 1.2: Editing Permission (for S3)

<div style={{
  border: '2px solid hsl(247, 43.20%, 34.50%)',  borderRadius: '12px',  padding: '8px',  width:'fit-content',
  display: 'inline-block'
}}>
  <img
    src="/img/ft-src-aws-s3-bucket-pol-permission-json-in-pol.png"
    alt="Connect"
    style={{
      maxWidth: '100%',
      borderRadius: '8px'
    }}
  />
</div>

### 🛠️ Step 1.3: Verifying Permission (for S3)

<div style={{
  border: '2px solid hsl(247, 43.20%, 34.50%)',  borderRadius: '12px',  padding: '8px',  width:'fit-content',
  display: 'inline-block'
}}>
  <img
    src="/img/ft-src-aws-s3-bucket-pol-permission-json-verification.png"
    alt="Connect"
    style={{
      maxWidth: '100%',
      borderRadius: '8px'
    }}
  />
</div>

### 🛠️ Step 1.4: Create an IAM Role with Created Policy (for S3)

<div style={{
  border: '2px solid hsl(247, 43.20%, 34.50%)',  borderRadius: '12px',  padding: '8px',  width:'fit-content',
  display: 'inline-block'
}}>
  <img
    src="/img/ft-src-aws-s3-bucket-role-trust-relationship-json.png"
    alt="Connect"
    style={{
      maxWidth: '100%',
      borderRadius: '8px'
    }}
  />
</div>

### 🛠️ Step 1.5: Getting Role ARN (for S3)

<div style={{
  border: '2px solid hsl(247, 43.20%, 34.50%)',  borderRadius: '12px',  padding: '8px',  width:'fit-content',
  display: 'inline-block'
}}>
  <img
    src="/img/ft-src-aws-s3-bucket-role-arn.png"
    alt="Connect"
    style={{
      maxWidth: '100%',
      borderRadius: '8px'
    }}
  />
</div>

---

4. 🛠️ Step 1: Setting Role ARN (for S3) & Test the Connection

<div style={{
  border: '2px solid hsl(247, 43.20%, 34.50%)',  borderRadius: '12px',  padding: '8px',  width:'fit-content',
  display: 'inline-block'
}}>
  <img
    src="/img/ft-src-aws-s3-bucket-role-setting-arn-and-test.png"
    alt="Connect"
    style={{
      maxWidth: '100%',
      borderRadius: '8px'
    }}
  />
</div>

4. Set **folder path** and optional wildcards:

<div style={{
  border: '2px solid hsl(247, 43.20%, 34.50%)',  borderRadius: '12px',  padding: '8px',  width:'fit-content',
  display: 'inline-block'
}}>
  <img
    src="/img/ft-src-aws-s3-bucket-fetching-files-for-pattern.png"
    alt="Connect"
    style={{
      maxWidth: '100%',
      borderRadius: '8px'
    }}
  />
</div>


   - e.g., `my_data/*.csv`
5. Choose your **destination schema** and **destination table name**

---

## 🏗️ Step 3: Set Up Destination – Snowflake

1. Click ➕ **Add Destination** (if not already set)

<div style={{
  border: '2px solid hsl(247, 43.20%, 34.50%)',  borderRadius: '12px',  padding: '8px',  width:'fit-content',
  display: 'inline-block'
}}>
  <img
    src="/img/ft-tgt-sf-db.png"
    alt="Connect"
    style={{
      maxWidth: '100%',
      borderRadius: '8px'
    }}
  />
</div>

2. Choose **Snowflake**

<div style={{
  border: '2px solid hsl(247, 43.20%, 34.50%)',  borderRadius: '12px',  padding: '8px',  width:'fit-content',
  display: 'inline-block'
}}>
  <img
    src="/img/ft-tgt-sf-db-choose.png"
    alt="Connect"
    style={{
      maxWidth: '100%',
      borderRadius: '8px'
    }}
  />
</div>


3. Enter:
   - **Account ID** (e.g., `xy12345.ap-south-1`)
   - **Warehouse**
   - **Database**
   - **Schema**
   - **User/Password** or **Key Pair Authentication**

<div style={{
  border: '2px solid hsl(247, 43.20%, 34.50%)',  borderRadius: '12px',  padding: '8px',  width:'fit-content',
  display: 'inline-block'
}}>
  <img
    src="/img/ft-tgt-sf-db-creds-run-test.png"
    alt="Connect"
    style={{
      maxWidth: '100%',
      borderRadius: '8px'
    }}
  />
</div>

4. Test the connection

<div style={{
  border: '2px solid hsl(247, 43.20%, 34.50%)',  borderRadius: '12px',  padding: '8px',  width:'fit-content',
  display: 'inline-block'
}}>
  <img
    src="/img/ft-tgt-sf-db-creds-run-test-out.png"
    alt="Connect"
    style={{
      maxWidth: '100%',
      borderRadius: '8px'
    }}
  />
</div>

---

## 🧠 Step 4: Configure File Parsing

- **File format detection**: Auto (or choose manually CSV, JSON, etc.)
- Configure:
  - Header row
  - Encoding (UTF-8, etc.)
  - Delimiters
  - Quoting
- Enable **automatic schema detection**

---

## 🔁 Step 5: Sync Settings

- Set **sync frequency** (e.g., every hour, daily)
- Choose file sync mode:
  - Process once
  - Rescan and update if modified

---

## ✅ Step 6: Run First Sync

- Click **Start Initial Sync**
- Monitor progress under the **Connector Overview**
- Tables will be created automatically in Snowflake

---

## 🔍 Monitoring Sync

- Go to the **Connectors tab**
- Click your connector
- View:
  - Sync status
  - Last sync time
  - Schema changes
  - Error logs (if any)

---

## 📘 Additional Resources

- [Fivetran File Connector Docs](https://fivetran.com/docs/files)
- [Amazon S3 to Snowflake Setup Guide](https://fivetran.com/docs/files/s3)
- [Advanced File Parsing](https://fivetran.com/docs/files/configure-file-connector)
- [Monitoring Syncs](https://fivetran.com/docs/getting-started/monitoring)
- [dbt Integration with Fivetran](https://fivetran.com/docs/transformations/dbt)

---

## 🏁 Closing Notes

- Use the **14-day trial** to evaluate performance and schema flexibility.
- For production use, consider using **naming conventions** in file names for auto-splitting into separate tables.
- Integrate with **dbt or BI tools** once data is landed in Snowflake.
