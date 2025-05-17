
# References and Further Reading

## AWS Official Documentation & Blogs

- **[Cost optimization – Amazon Timestream Developer Guide](https://docs.aws.amazon.com/timestream/latest/developerguide/cost-optimization.html)** – *AWS Documentation*  
  Official best practices to minimize Timestream costs, covering batching writes, using multi-measure records, data retention tuning, and writing efficient queries.

- **[Understanding and optimizing Amazon Timestream Compute Units for efficient time series data management](https://aws.amazon.com/blogs/database/understanding-and-optimizing-amazon-timestream-compute-units-for-efficient-time-series-data-management/)** – *AWS Database Blog (2024)*  
  Introduces Timestream’s new pricing model based on Timestream Compute Units (TCUs), and how to cap them for budget control.

- **[Improve query performance and reduce cost using scheduled queries in Amazon Timestream](https://aws.amazon.com/blogs/database/improve-query-performance-and-reduce-cost-using-scheduled-queries-in-amazon-timestream/)** – *AWS Database Blog (2023)*  
  Demonstrates use of Scheduled Queries and multi-measure records to pre-compute results and reduce read costs.

- **[Patterns for AWS IoT time series data ingestion with Amazon Timestream](https://aws.amazon.com/blogs/database/patterns-for-aws-iot-time-series-data-ingestion-with-amazon-timestream/)** – *AWS Database Blog (2021)*  
  Outlines ingestion patterns for IoT telemetry and compares Lambda, Kinesis, and SQS setups for cost-efficiency.

## Community and Case Studies

- **[AWS Timestream Best Practices](https://www.globaldatanet.com/blog/aws-timestream-best-practices)** – *globaldatanet Tech Blog (2023)*  
  Real-world optimization tips for batching, query efficiency, and modeling, with sample architectures.

- **[Amazon Timestream Cost Optimization – Top 10 Tips & Best Practices](https://www.dragonflydb.io/blog/amazon-timestream-cost-optimization-top-10-tips-best-practices)** – *DragonflyDB Blog (2024)*  
  FinOps checklist to minimize Timestream and AWS cost, including developer training and usage monitoring.

- **[Three Cost-Effective Design Patterns for AWS IoT Data Ingestion](https://www.trek10.com/blog/three-cost-effective-design-patterns-for-aws-iot-data-ingestion)** – *Trek10 (2021)*  
  Compares Lambda, SQS, and Kinesis patterns for ingesting data, with cost-performance tradeoffs.

- **[How to Ingest Both Real-Time and Batch Data into AWS Timestream using Lambda](https://presidiotech.com/blog/how-to-ingest-both-real-time-and-batch-data-into-aws-timestream-using-lambda/)** – *Presidio Tech Blog (2024)*  
  Describes unifying real-time and batch ingestion with Lambda, complete with diagrams and code.

## Research and Advanced Insights

- **[What’s the best way to do fan-out/fan-in serverlessly in 2024?](https://theburningmonk.com/2024/01/whats-the-best-way-to-do-fan-out-fan-in-serverlessly-in-2024/)** – *Yan Cui, The Burning Monk*  
  Evaluates serverless patterns for cost and scalability, including cost-per-million comparison for SNS, SQS, and Step Functions.

- **[Amazon Timestream vs. Other Time Series Databases for Energy](https://mactores.com/insights/amazon-timestream-vs-other-time-series-databases-for-energy/)** – *Mactores (2024)*  
  Whitepaper comparing Timestream, InfluxDB, and TimescaleDB for industrial analytics, with cost and performance benchmarking.
