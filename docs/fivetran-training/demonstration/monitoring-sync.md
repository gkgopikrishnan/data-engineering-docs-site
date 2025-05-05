# 📊 Monitoring File Connector Sync in Fivetran

Fivetran provides a detailed dashboard and REST API support to help you monitor file-based connector syncs in real-time.

---

## 🔍 Where to Monitor

### 1. **Fivetran Dashboard**
- Go to **Connectors** in your Fivetran UI
- Select your **File Connector**
- You'll see:
  - **Current Sync Status**
  - **Last Sync Time**
  - **Next Sync Schedule**
  - **Number of Records Synced**
  - **Duration of Sync**

---

## 🚦 Sync Status Indicators

| Status        | Description                               |
|---------------|--------------------------------------------|
| ✅ Success     | Sync completed without issues              |
| ⏳ Syncing     | Sync currently in progress                 |
| ⚠️ Delayed    | Sync not started on time                   |
| ❌ Failed      | Sync encountered an error                  |
| 💤 Paused      | Sync paused manually or by system trigger  |

---

## 📈 Logs & Sync Details

Click into any sync to view:
- Time taken
- Files parsed
- Records inserted/updated/deleted
- Warnings or Errors (e.g. format issues)

---

## 🔔 Alerts & Notifications

You can configure automated alerts:
- Go to: **Account Settings > Notifications**
- Set up alerts for:
  - Sync Failures
  - Schema Changes
  - Destination Errors

Supported alert channels:
- **Email**
- **Slack**
- **PagerDuty**
- **Webhooks**

---

## 🧰 Advanced Monitoring with Fivetran REST API

Fivetran offers APIs to monitor connector activity programmatically.

### Example: Get Sync Status via API

```http
GET https://api.fivetran.com/v1/connectors/{connector_id}
Authorization: Bearer <your_api_key>
```

> 🔐 Replace `{connector_id}` with your actual Connector ID from the Fivetran UI.

### Response Example

```json
{
  "data": {
    "id": "file_connector_abc123",
    "status": {
      "sync_state": "scheduled",
      "tasks": [],
      "warnings": [],
      "schema_status": "ready"
    }
  }
}
```

📘 API Docs: [Fivetran REST API Reference](https://fivetran.com/docs/rest-api/connectors)

---

## 🔎 Pro Tips

- Query Snowflake metadata tables to check latest load times and record counts
- Ensure filenames follow expected patterns (e.g., `*.csv`)
- Always validate file encoding and delimiters for correct parsing

---

## 📘 Additional Resources

- [Monitoring Syncs in Fivetran](https://fivetran.com/docs/getting-started/monitoring-fivetran)
- [API: Get Connector Status](https://fivetran.com/docs/rest-api/connectors#retrieveaconnector)
- [Fivetran Status Page](https://status.fivetran.com/)
- [Connector Setup Guide](https://fivetran.com/docs)

---

Stay ahead of sync issues and ensure your pipelines run smoothly! 🚀
