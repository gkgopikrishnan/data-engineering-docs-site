# Fivetran Introduction

## Objective
This session aims to provide an end-to-end overview of Fivetran, its architecture, core features, use cases, and a demonstration of how to integrate Fivetran with modern data platforms like Snowflake. The session is designed for data professionals interested in simplifying and automating their data pipelines.

---

## Session Outline

### 1. Introduction
- Overview of data integration in modern analytics
- The evolution from ETL to ELT
- Common challenges with traditional ETL tools
- Introduction to Fivetran as a modern ELT solution

### 2. Overview of Fivetran
- [What is Fivetran?](/docs/fivetran-training/overview-of-fivetran/what-is-fivetran)
- Key differentiators and value proposition
- Fivetran’s approach to ELT
- Overview of supported data sources and destinations

### 3. Fivetran Architecture and Components
- How Fivetran moves data: source to destination
- Core components:
  - Connectors
  - Sync mechanism (incremental sync, change data capture)
  - Data warehousing support
  - Schema management
- Security and compliance standards
- Integration with dbt for data transformation

### 4. Business Use Cases
- Common enterprise use cases:
  - CRM (Salesforce) to Snowflake
  - Marketing platforms (Google Ads, Facebook Ads)
  - File-based data sources (Amazon S3, Google Sheets)
- Benefits for different roles:
  - For engineers: low-maintenance pipelines
  - For analysts: access to fresh, reliable data
  - For leadership: faster time-to-insight

### 5. Demonstration (Optional)
- Walkthrough: Creating a connector from a sample source (e.g., Google Sheets or S3) to Snowflake
- Showcasing:
  - Connector setup and configuration
  - Automatic schema handling
  - Data sync logs and monitoring
  - Basic transformation setup via dbt Cloud or dbt Core

### 6. Questions and Discussion
- Open discussion on real-world implementation scenarios
- Address specific technical or strategic queries
- Invite knowledge sharing or use cases from attendees

### 7. Resources and Closing Notes
- Key resources for further learning:
  - [Fivetran Documentation](https://fivetran.com/docs)
  - [Fivetran YouTube Channel](https://www.youtube.com/@Fivetran)
  - [dbt and Fivetran Integration Guide](https://fivetran.com/docs/transformations/dbt)
- Information on free trials and account setup
- Summary and thank-you note

---

## Target Audience
- Data Engineers
- Data Analysts
- BI Developers
- Platform Architects
- Engineering Managers and Technical Leads

---

## Outcome
By the end of the session, participants will have a clear understanding of:
- Fivetran’s role in the modern data stack
- How to build automated, reliable data pipelines
- How to use Fivetran in conjunction with platforms like Snowflake and dbt
