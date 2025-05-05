/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  tutorialSidebar: [
  // Entries for Snowflake - Start
  {
    type: 'category',
    label: 'Snowflake Training',
    items: [
      {
        type: 'category',
        label: 'Module 01: Cloud Data Warehousing Concepts',
        items: [
          {
            type: 'doc',
            id: 'snowflake-training/Module-01-Cloud-Data-Warehousing-Concepts/module-01-cloud-data-warehousing-concepts-01-understanding-traditional-data-warehousing',
            label: '1. Traditional Data Warehousing',
            className: 'custom-sidebar-item'
          },
          {
            type: 'doc',
            id: 'snowflake-training/Module-01-Cloud-Data-Warehousing-Concepts/module-01-cloud-data-warehousing-concepts-02-evolution-of-cloud',
            label: '2. Evolution of Cloud Computing',
            className: 'custom-sidebar-item'
          },          {
            type: 'doc',
            id: 'snowflake-training/Module-01-Cloud-Data-Warehousing-Concepts/module-01-cloud-data-warehousing-concepts-03-evolution-to-cloud-data-warehousing-use-cases',
            label: '3 Evolution to Cloud Data Warehousing',
            className: 'custom-sidebar-item'
          },
          {
            type: 'doc',
            id: 'snowflake-training/Module-01-Cloud-Data-Warehousing-Concepts/module-01-cloud-data-warehousing-concepts-04-architecture-cloud-data-warehousing',
            label: '4. Cloud Data Warehousing Architecture',
            className: 'custom-sidebar-item'
          },
          {
            type: 'doc',
            id: 'snowflake-training/Module-01-Cloud-Data-Warehousing-Concepts/module-01-cloud-data-warehousing-concepts-05-core-concepts-and-key-features',
            label: '5. Core Concepts and Key Features',
            className: 'custom-sidebar-item'
          },
          {
            type: 'doc',
            id: 'snowflake-training/Module-01-Cloud-Data-Warehousing-Concepts/module-01-cloud-data-warehousing-concepts-06-benefits-of-cloud-native-architecture',
            label: '6. Benefits of Cloud-Native Architecture',
            className: 'custom-sidebar-item'
          },
          {
            type: 'doc',
            id: 'snowflake-training/Module-01-Cloud-Data-Warehousing-Concepts/module-01-cloud-data-warehousing-concepts-07-traditional-vs-cloud-data-warehousing',
            label: '7. Traditional vs Cloud Data Warehousing',
            className: 'custom-sidebar-item'
          },
          {
            type: 'doc',
            id: 'snowflake-training/Module-01-Cloud-Data-Warehousing-Concepts/module-01-cloud-data-warehousing-concepts-08-overview-of-cloud-data-warehouse-platforms',
            label: '8. Overview of Cloud Data Warehouse Platforms',
            className: 'custom-sidebar-item'
          },
          {
            type: 'doc',
            id: 'snowflake-training/Module-01-Cloud-Data-Warehousing-Concepts/module-01-cloud-data-warehousing-concepts-09-introduction-to-snowflake-and-its-use-cases',
            label: '9. Introduction to Snowflake and Its Use Cases',
            className: 'custom-sidebar-item'
          },
          {
            type: 'doc',
            id: 'snowflake-training/Module-01-Cloud-Data-Warehousing-Concepts/module-01-cloud-data-warehousing-concepts-10-snowflake-vs-redshift-bigquery-synapse',
            label: '10. Snowflake vs Redshift-BigQuery-Synapse',
            className: 'custom-sidebar-item'
          }
        ]
      },
            {
        type: 'category',
        label: 'Module 02: Snowflake Architecture Deep Dive',
        items: [
          'snowflake-training/Module-02-Snowflake-Architecture-Deep-Dive/module-02-snowflake-architecture-deep-dive-micro-partitions-metadata-layer-caching',
          'snowflake-training/Module-02-Snowflake-Architecture-Deep-Dive/module-02-snowflake-architecture-deep-dive-multi-cluster-shared-data-architecture',
          'snowflake-training/Module-02-Snowflake-Architecture-Deep-Dive/module-02-snowflake-architecture-deep-dive-separation-of-storage-compute',
          'snowflake-training/Module-02-Snowflake-Architecture-Deep-Dive/module-02-snowflake-architecture-deep-dive-storage-vs-virtual-warehouses',
          'snowflake-training/Module-02-Snowflake-Architecture-Deep-Dive/module-02-snowflake-architecture-deep-dive-time-travel-fail-safe-zero-copy-cloning',
        ],
      },
      {
        type: 'category',
        label: 'Module 03: Cross-Cloud & Multi-Cloud Data Sharing',
        items: [
          'snowflake-training/Module-03-Cross-Cloud-Multi-Cloud-Data-Sharing/module-03-cross-cloud-multi-cloud-data-sharing-benefits-and-challenges-of-multi-cloud-data-sharing',
          'snowflake-training/Module-03-Cross-Cloud-Multi-Cloud-Data-Sharing/module-03-cross-cloud-multi-cloud-data-sharing-cross-cloud-data-transfer-mechanisms-in-snowflake',
          'snowflake-training/Module-03-Cross-Cloud-Multi-Cloud-Data-Sharing/module-03-cross-cloud-multi-cloud-data-sharing-ensuring-compliance-and-data-integrity-across-clouds',
          'snowflake-training/Module-03-Cross-Cloud-Multi-Cloud-Data-Sharing/module-03-cross-cloud-multi-cloud-data-sharing-real-world-use-cases-for-multi-cloud-data-sharing',
          'snowflake-training/Module-03-Cross-Cloud-Multi-Cloud-Data-Sharing/module-03-cross-cloud-multi-cloud-data-sharing-snowflakes-cross-cloud-data-sharing-capabilities',
          'snowflake-training/Module-03-Cross-Cloud-Multi-Cloud-Data-Sharing/module-03-cross-cloud-multi-cloud-data-sharing-what-is-cross-cloud-data-sharing',
        ],
      },
      {
        type: 'category',
        label: 'Module 04: Setup Environments',
        items: [
          'snowflake-training/Module-04-Setup-Environments/module-04-setup-environments-best-practices-for-role-based-access-control',
          'snowflake-training/Module-04-Setup-Environments/module-04-setup-environments-creating-a-snowflake-account',
          'snowflake-training/Module-04-Setup-Environments/module-04-setup-environments-network-policies-mfa-sso-integration',
          'snowflake-training/Module-04-Setup-Environments/module-04-setup-environments-overview-of-editions-pricing',
          'snowflake-training/Module-04-Setup-Environments/module-04-setup-environments-setting-up-warehouses-databases-schemas',
          'snowflake-training/Module-04-Setup-Environments/module-04-setup-environments-understanding-roles-rbac-access-hierarchies',
        ],
      },
      {
        type: 'category',
        label: 'Module 05: Snowflake Core Features',
        items: [
          'snowflake-training/Module-05-Snowflake-Core-Features/module-05-snowflake-core-features-data-types',
          'snowflake-training/Module-05-Snowflake-Core-Features/module-05-snowflake-core-features-file-formats-and-stages',
          'snowflake-training/Module-05-Snowflake-Core-Features/module-05-snowflake-core-features-handling-semi-structured-data-json-avro-parquet',
          'snowflake-training/Module-05-Snowflake-Core-Features/module-05-snowflake-core-features-sequences-streams-tasks',
          'snowflake-training/Module-05-Snowflake-Core-Features/module-05-snowflake-core-features-tables-permanent-temporary-transient',
          'snowflake-training/Module-05-Snowflake-Core-Features/module-05-snowflake-core-features-views-standard-secure-materialized',
          'snowflake-training/Module-05-Snowflake-Core-Features/module-05-snowflake-core-features-working-with-snowflake-variant-data-type',
        ],
      },
      {
        type: 'category',
        label: 'Module 06: Data Loading & Unloading',
        items: [
          'snowflake-training/Module-06-Data-Loading-Unloading/module-06-data-loading-unloading-automation-with-streams-tasks',
          'snowflake-training/Module-06-Data-Loading-Unloading/module-06-data-loading-unloading-best-practices-for-data-ingestion',
          'snowflake-training/Module-06-Data-Loading-Unloading/module-06-data-loading-unloading-copy-into-putget-unload',
          'snowflake-training/Module-06-Data-Loading-Unloading/module-06-data-loading-unloading-external-stages-s3-gcs-azure',
          'snowflake-training/Module-06-Data-Loading-Unloading/module-06-data-loading-unloading-file-formats-csv-json-parquet-avro-etc',
          'snowflake-training/Module-06-Data-Loading-Unloading/module-06-data-loading-unloading-internal-stages-user-table-named',
          'snowflake-training/Module-06-Data-Loading-Unloading/module-06-data-loading-unloading-snowpipe-continuous-data-loading',
        ],
      },
      {
        type: 'category',
        label: 'Module 07: Security & Access Control',
        items: [
          'snowflake-training/Module-07-Security-Access-Control/module-07-security-access-control-best-practices-for-data-security-in-snowflake',
          'snowflake-training/Module-07-Security-Access-Control/module-07-security-access-control-masking-policies-row-access-policies',
          'snowflake-training/Module-07-Security-Access-Control/module-07-security-access-control-network-policies-mfa-oauth-sso-integration',
          'snowflake-training/Module-07-Security-Access-Control/module-07-security-access-control-object-column-level-security',
          'snowflake-training/Module-07-Security-Access-Control/module-07-security-access-control-object-level-security-and-views',
          'snowflake-training/Module-07-Security-Access-Control/module-07-security-access-control-rbac-roles-grants-hierarchies',
        ],
      },
      {
        type: 'category',
        label: 'Module 08: Querying SQL in Snowflake',
        items: [
          'snowflake-training/Module-08-Querying-SQL-in-Snowflake/module-08-querying-sql-in-snowflake-advanced-query-optimization-techniques',
          'snowflake-training/Module-08-Querying-SQL-in-Snowflake/module-08-querying-sql-in-snowflake-basic-to-advanced-sql',
          'snowflake-training/Module-08-Querying-SQL-in-Snowflake/module-08-querying-sql-in-snowflake-handling-nested-json-and-other-semi-structured-data',
          'snowflake-training/Module-08-Querying-SQL-in-Snowflake/module-08-querying-sql-in-snowflake-joins-ctes-window-functions',
          'snowflake-training/Module-08-Querying-SQL-in-Snowflake/module-08-querying-sql-in-snowflake-lateral-flatten-variant-type',
          'snowflake-training/Module-08-Querying-SQL-in-Snowflake/module-08-querying-sql-in-snowflake-semi-structured-data-json-avro-parquet',
        ],
      },
      {
        type: 'category',
        label: 'Module 09: Performance Tuning & Optimization',
        items: [
          'snowflake-training/Module-09-Performance-Tuning-Optimization/module-09-performance-tuning-optimization-auto-suspend-and-auto-resume-for-warehouses',
          'snowflake-training/Module-09-Performance-Tuning-Optimization/module-09-performance-tuning-optimization-clustering-keys',
          'snowflake-training/Module-09-Performance-Tuning-Optimization/module-09-performance-tuning-optimization-materialized-views',
          'snowflake-training/Module-09-Performance-Tuning-Optimization/module-09-performance-tuning-optimization-optimizing-warehouse-sizing-and-scaling',
          'snowflake-training/Module-09-Performance-Tuning-Optimization/module-09-performance-tuning-optimization-query-history-warehouse-sizing',
          'snowflake-training/Module-09-Performance-Tuning-Optimization/module-09-performance-tuning-optimization-query-profiling-execution-plan',
          'snowflake-training/Module-09-Performance-Tuning-Optimization/module-09-performance-tuning-optimization-result-reuse-and-caching',
        ],
      },
      {
        type: 'category',
        label: 'Module 10: BI & Analytics Integration',
        items: [
          'snowflake-training/Module-10-BI-Analytics-Integration/module-10-bi-analytics-integration-connecting-with-power-bi-tableau-looker-excel',
          'snowflake-training/Module-10-BI-Analytics-Integration/module-10-bi-analytics-integration-query-pushdown-performance-impacts',
          'snowflake-training/Module-10-BI-Analytics-Integration/module-10-bi-analytics-integration-using-snowflake-for-real-time-dashboards-and-reporting',
        ],
      },
      {
        type: 'category',
        label: 'Module 11: Scheduling, Orchestration & Automation',
        items: [
          'snowflake-training/Module-11-Scheduling-Orchestration-and-Automation/module-11-scheduling-orchestration-and-automation-automating-refreshes-and-pipelines',
          'snowflake-training/Module-11-Scheduling-Orchestration-and-Automation/module-11-scheduling-orchestration-and-automation-best-practices-for-data-orchestration',
          'snowflake-training/Module-11-Scheduling-Orchestration-and-Automation/module-11-scheduling-orchestration-and-automation-scheduling-with-dbt-cloud-airflow-prefect',
          'snowflake-training/Module-11-Scheduling-Orchestration-and-Automation/module-11-scheduling-orchestration-and-automation-streams-tasks-change-data-capture',
          'snowflake-training/Module-11-Scheduling-Orchestration-and-Automation/module-11-scheduling-orchestration-and-automation-task-dependencies-dags',
          'snowflake-training/Module-11-Scheduling-Orchestration-and-Automation/module-11-scheduling-orchestration-and-automation-triggering-workflows-based-on-data-changes',
        ],
      },
      {
        type: 'category',
        label: 'Module 12: Data Migration',
        items: [
          'snowflake-training/Module-12-Data-Migration/module-12-data-migration-data-validation-techniques',
          'snowflake-training/Module-12-Data-Migration/module-12-data-migration-migration-strategy-lift-shift-vs-replatform',
          'snowflake-training/Module-12-Data-Migration/module-12-data-migration-phased-migration-plan',
          'snowflake-training/Module-12-Data-Migration/module-12-data-migration-schema-extraction-tools',
        ],
      },
      {
        type: 'category',
        label: 'Module 13: SnowConvert - Automated Code Conversion',
        items: [
          'snowflake-training/Module-13-SnowConvert-Automated-Code-Conversion/module-13-snowconvert-automated-code-conversion-demo-auto-converting-ddl-views-sps',
          'snowflake-training/Module-13-SnowConvert-Automated-Code-Conversion/module-13-snowconvert-automated-code-conversion-identifying-manual-conversion-hotspots',
          'snowflake-training/Module-13-SnowConvert-Automated-Code-Conversion/module-13-snowconvert-automated-code-conversion-installing-using-snowconvert-idecli',
          'snowflake-training/Module-13-SnowConvert-Automated-Code-Conversion/module-13-snowconvert-automated-code-conversion-reviewing-logs-migration-reports',
          'snowflake-training/Module-13-SnowConvert-Automated-Code-Conversion/module-13-snowconvert-automated-code-conversion-supported-sources-oracle-sql-server-teradata',
          'snowflake-training/Module-13-SnowConvert-Automated-Code-Conversion/module-13-snowconvert-automated-code-conversion-what-is-snowconvert-use-cases',
        ],
      },
      {
        type: 'category',
        label: 'Module 14: Development, CICD & Deployment',
        items: [
          'snowflake-training/Module-14-Development-CICD-and-Deployment/module-14-development-cicd-and-deployment-automating-deployments-with-github-actions',
          'snowflake-training/Module-14-Development-CICD-and-Deployment/module-14-development-cicd-and-deployment-dbt-core-dbt-cloud-integration',
          'snowflake-training/Module-14-Development-CICD-and-Deployment/module-14-development-cicd-and-deployment-github-actions-gitlab-pipelines',
          'snowflake-training/Module-14-Development-CICD-and-Deployment/module-14-development-cicd-and-deployment-snowflake-cicd-with-dev-uat-prod-environments',
          'snowflake-training/Module-14-Development-CICD-and-Deployment/module-14-development-cicd-and-deployment-unit-testing-with-dbt',
          'snowflake-training/Module-14-Development-CICD-and-Deployment/module-14-development-cicd-and-deployment-version-control-rollback-strategies',
        ],
      },
      {
        type: 'category',
        label: 'Module 15: AIML with Snowpark',
        items: [
          'snowflake-training/Module-15-AIML-with-Snowpark/module-15-aiml-with-snowpark-dataframe-based-ml-workflows',
          'snowflake-training/Module-15-AIML-with-Snowpark/module-15-aiml-with-snowpark-deploying-models-monitoring-in-snowflake',
          'snowflake-training/Module-15-AIML-with-Snowpark/module-15-aiml-with-snowpark-introduction-to-snowpark',
          'snowflake-training/Module-15-AIML-with-Snowpark/module-15-aiml-with-snowpark-model-training-evaluation-inference',
          'snowflake-training/Module-15-AIML-with-Snowpark/module-15-aiml-with-snowpark-snowpark-apis-python-scala-java',
          'snowflake-training/Module-15-AIML-with-Snowpark/module-15-aiml-with-snowpark-udfs-stored-procedures-with-python',
          'snowflake-training/Module-15-AIML-with-Snowpark/module-15-aiml-with-snowpark-using-snowpark-ml-integrations-with-scikit-learn-xgboost'
        ],
      },
      {
        type: 'category',
        label: 'Module 16: Semi-Structured & Unstructured Data',
        items: [
          'snowflake-training/Module-16-Semi-Structured-Unstructured-Data/module-16-semi-structured-unstructured-data-advanced-techniques-for-processing-semi-structured-data',
          'snowflake-training/Module-16-Semi-Structured-Unstructured-Data/module-16-semi-structured-unstructured-data-flatten-object_insert-lateral',
          'snowflake-training/Module-16-Semi-Structured-Unstructured-Data/module-16-semi-structured-unstructured-data-handling-unstructured-data-snowflake-external-volumes',
          'snowflake-training/Module-16-Semi-Structured-Unstructured-Data/module-16-semi-structured-unstructured-data-variant-object-array-data-types',
          'snowflake-training/Module-16-Semi-Structured-Unstructured-Data/module-16-semi-structured-unstructured-data-working-with-json-xml-parquet-avro',
        ],
      },
      {
        type: 'category',
        label: 'Module 17: Governance, Cataloging & Compliance',
        items: [
          'snowflake-training/Module-17-Governance-Cataloging-Compliance/module-17-governance-cataloging-compliance-auditing-access-role-usage',
          'snowflake-training/Module-17-Governance-Cataloging-Compliance/module-17-governance-cataloging-compliance-compliance-and-data-privacy-measures',
          'snowflake-training/Module-17-Governance-Cataloging-Compliance/module-17-governance-cataloging-compliance-data-lineage-tools',
          'snowflake-training/Module-17-Governance-Cataloging-Compliance/module-17-governance-cataloging-compliance-gdpr-ccpa-and-snowflakes-data-protection',
          'snowflake-training/Module-17-Governance-Cataloging-Compliance/module-17-governance-cataloging-compliance-information-schema-vs-account-usage-views',
          'snowflake-training/Module-17-Governance-Cataloging-Compliance/module-17-governance-cataloging-compliance-purge-retention-strategy',
          'snowflake-training/Module-17-Governance-Cataloging-Compliance/module-17-governance-cataloging-compliance-tags-classifications-policies',
        ],
      },
      {
        type: 'category',
        label: 'Module 18: Cost Management & Optimization',
        items: [
          'snowflake-training/Module-18-Cost-Management-Optimization/module-18-cost-management-optimization-auto-suspend-auto-resume',
          'snowflake-training/Module-18-Cost-Management-Optimization/module-18-cost-management-optimization-best-practices-for-cost-control-in-snowflake',
          'snowflake-training/Module-18-Cost-Management-Optimization/module-18-cost-management-optimization-credit-usage-reporting',
          'snowflake-training/Module-18-Cost-Management-Optimization/module-18-cost-management-optimization-estimating-costs',
          'snowflake-training/Module-18-Cost-Management-Optimization/module-18-cost-management-optimization-query-profiling-for-cost-optimization',
          'snowflake-training/Module-18-Cost-Management-Optimization/module-18-cost-management-optimization-warehouse-sizing-scaling',
        ],
      },
      {
        type: 'category',
        label: 'Module 19: Testing, Monitoring & Observability',
        items: [
          'snowflake-training/Module-19-Testing-Monitoring-Observability/module-19-testing-monitoring-observability-access-history-query-failures',
          'snowflake-training/Module-19-Testing-Monitoring-Observability/module-19-testing-monitoring-observability-custom-alerts-notifications',
          'snowflake-training/Module-19-Testing-Monitoring-Observability/module-19-testing-monitoring-observability-resource-monitors-query-history',
          'snowflake-training/Module-19-Testing-Monitoring-Observability/module-19-testing-monitoring-observability-using-dbt-for-data-quality-testing',
          'snowflake-training/Module-19-Testing-Monitoring-Observability/module-19-testing-monitoring-observability-using-snowflakes-query-profiler-for-monitoring',
        ],
      },
      {
        type: 'category',
        label: 'Module 20: Snowflake Marketplace & Native Apps',
        items: [
          'snowflake-training/Module-20-Snowflake-Marketplace-Native-Apps/module-20-snowflake-marketplace-native-apps-accessing-third-party-datasets',
          'snowflake-training/Module-20-Snowflake-Marketplace-Native-Apps/module-20-snowflake-marketplace-native-apps-native-app-framework',
          'snowflake-training/Module-20-Snowflake-Marketplace-Native-Apps/module-20-snowflake-marketplace-native-apps-publishing-apps-data',
          'snowflake-training/Module-20-Snowflake-Marketplace-Native-Apps/module-20-snowflake-marketplace-native-apps-what-is-the-snowflake-marketplace',
        ],
      }      
      
    ],
  },

// Entries for Snowflake - end.

  // Entries for DBT - Start
    {
      type: 'category',
      label: 'DBT Training',
      items: [
        'dbt-training/dbt-introduction',
      ],
    },
  // Entries for DBT - end.

  // Entries for Fivetran - begin.
  {
      type: 'category',
      label: 'Fivetran Basics',
      items: [
        {
          type: 'category',
          label: '1. Introduction',
          items: [
            'fivetran-training/introduction/introduction-to-fivetran',
            'fivetran-training/introduction/common-challenges-with-etl',
            'fivetran-training/introduction/evolution-from-etl-to-elt',
            'fivetran-training/introduction/overview-of-data-integration',
          ],
        },
        {
          type: 'category',
          label: '2. Overview of Fivetran',
          items: [
            'fivetran-training/overview-of-fivetran/what-is-fivetran',
          ],
        },
        {
          type: 'category',
          label: '3. Fivetran Architecture and Components',
          items: [
            'fivetran-training/architecture/architecture-overview',
          ],
        },
        {
          type: 'category',
          label: '4. Business Use Cases',
          items: [
            'fivetran-training/business-use-cases/crm-to-snowflake',
            'fivetran-training/business-use-cases/file-based-sources',
            'fivetran-training/business-use-cases/marketing-platforms',
          ],
        },
        {
          type: 'category',
          label: '5. Demonstration (Optional)',
          items: [
            'fivetran-training/demonstration/ft-trail-account-setup',
            'fivetran-training/demonstration/ft-setting-up-connections-setup-overview',
            'fivetran-training/demonstration/ft-setting-up-connections-setup-step-by-step',
            'fivetran-training/demonstration/ft-setting-up-destinations-setup-overview',
            'fivetran-training/demonstration/ft-setting-up-destinations-setup-step-by-step',
            'fivetran-training/demonstration/monitoring-sync',
            'fivetran-training/demonstration/dbt-integration',
          ],
        },
        {
          type: 'category',
          label: '6. Questions and Discussion',
          items: [
            'fivetran-training/questions/discussion',
          ],
        },
        {
          type: 'category',
          label: '7. Resources and Closing Notes',
          items: [
            'fivetran-training/resources/learning-resources',
            'fivetran-training/resources/trial-info',
          ],
        },
      ],
    },
  // Entries for Fivetran - end.
  
  ],
};
