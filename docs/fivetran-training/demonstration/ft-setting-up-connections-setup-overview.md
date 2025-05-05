# 🔼 Set Up a Fivetran File Connector overview

## 1. 📁 Prepare Your File Source
- Choose and configure your storage:
  - ✅ Amazon S3
  - ✅ Azure Blob
  - ✅ Google Cloud Storage (GCS)
  - ✅ SFTP, FTPS
- Create a folder or bucket path (e.g., `s3://your-bucket/my_data/`)
- Upload sample files like `sales.csv`, `employees.json`, etc.

---

## 2. 🔐 Log in to Fivetran
- Go to the [Fivetran Dashboard](https://fivetran.com)
- Sign in with your account

---

## 3. ➕ Create the File Connector
- Click on **Add Connector**
- Search for **"Files"**
- Choose the appropriate file storage connector (e.g., S3)
- Select your **destination** (e.g., **Snowflake**)

---

## 4. 🔒 Provide Access Credentials
- Choose one of the authentication options:
  - ✅ IAM Role ARN (Recommended for AWS S3)
  - ✅ Access Key ID + Secret Access Key
- Grant necessary permissions (e.g., `s3:GetObject`, `s3:ListBucket`)

---

## 5. 📂 Configure File Settings
- Set file path pattern (e.g., `my_data/*.csv`)
- Define file type, delimiter, encoding, etc.
- Map to destination schema and table

---

## 6. ✅ Test & Start Sync
- Test the connection
- Click **Save & Test**
- Start initial sync

---

🎉 **Done!** Your file connector is now syncing data to Snowflake.
