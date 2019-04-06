import React, { Component } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Highlights from "./components/Highlights";
import Experience from "./components/Experience";
import thdlogo from "./thd.svg";
import gsklogo from "./logo-gsk.png";
import pepsilogo from "./pepsico-logo.jpg";
import wiprologo from "./wipro-logo.png";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <header className="App-header container">
          <h2>Ramkumar Paranjothy</h2>
          <Contact />
        </header>
        <div>
          <div className="summary">
            Skilled IT professional with 14+ years of progressive experience in
            driving and delivering medium to large scale IT projects. Expertise
            in Cloud Computing (Google Cloud / PCF), Container Technologies,
            Object Oriented Programming, Full Stack Development using MERN
            stack, Data Analytics (Python), API development (Java / Python /
            NodeJS / C#), Data Engineering, SQL / NoSQL, Data Pipelines, UNIX
            Shell-Scripting, Program/Project Management, Quality Engineering,
            DevOps/Reliability Engineering, Automation and Tooling.
          </div>
        </div>
        <div className="profile">
          <div className="skills" style={{ width: "20%" }}>
            <Highlights />
          </div>
          <div className="experience container" style={{ marginLeft: "25%" }}>
            <Experience
              tech="Java,Python,Google Cloud(GCP),Cloud Foundry,Cloud Functions,Pub/Sub,Google DataFlows,Apache Beam,Docker,SpringBoot,NodeJS,React,NGINX,DB2,Concourse,Analytical SQLs,Cassandra,Redis,TWS,Ab-Initio,JIRA,Pivotal Tracker"
              company="The Home Depot"
              logo={thdlogo}
              title="Technical Lead | March 2013 – current"
              details="Build scalable “Serverless data pipelines” using Google DataFlow SDK / Apache Beam SDK to transform and load high-volume data to support new user experiences on www.homedepot.com.
• Engineer process automation and orchestration using Google cloud storage, cloud functions and pub/sub.
• Convert file based ETL batch jobs into cloud-based real time data pipelines using NodeJS, pub/sub and
Redis.
• Invented a custom in-memory change capture pattern to identify incremental data upserts by leveraging
Redis instead ETL master files.
• Implemented a full-stack SPA (Single Page Application) solution using ReactJS, Express, NodeJS,
Bootstrap, Flex, NGINX and Google Cloud to inquire data from cloud-based Postgres service.
• Developed a full-stack web application using Python Flask, pandas, ReactJS and gunicorn to perform data
analytics on item promotions and discounts.
• Containerized custom React and NodeJS applications / SpringBoot applications/ tools / utilities using
Docker.
• Developed several REST APIs using SpringBoot to perform CRUD operations on store pricing data model.
• Developed and enhanced several Repository, Service, DAO, Model and Controller classes used by DaaS
APIs built using SpringBoot.
• Enhanced Service and DAO layers used by DaaS applications (SpringBoot) to support data retrieval from
Cassandra for new features/dimensions.
• Implement feature enhancements to microservices using SpringBoot, Embedded Cassandra, TestNG and
Google BiqQuery.
• Build tools using pandas, itertools to programmatically generate feeds to onboard data to test new features
integrations with the proprietary e-commerce platform.
• Implemented an automated solution to support continuous testing for integrations between domain,
aggregation and orchestration service layers using Python Flask, MySQL and Pivotal Cloud Foundry.
• Develop tools using NodeJS to generate and publish payloads to Pub/Sub topics to validate real time
processing of price, attributes, inventory and image conversion.
• Designed and developed REST APIs using Python (Flask, Pillow and pandas) for downloading digital assets from source servers, validating image resizing, image resolution validation, image compression and persistence in cloud storage.
• Simulate production like data using C#, Python and NodeJS Streams (through2, split2) to verify integration with downstream interfacing applications.
• Develop CI-CD pipelines to build, test and deploy applications to Google Compute Engine instances.
• Drive Scrum, Sprint grooming, Prioritization and Retro meetings with the team.
• Provided leadership skills to execute the project; resolve incidents and mitigate site outage situations.
• Built numerous analytical reports like Order Gap Report, Top SKU report, Error rate report (Pickup in
store and Appliance Orders) and Error Rate Alerts using DB2, SQL, ShellScripts and Cron.
• Performed overall site health assessment, site operational metrics generation, data analytics to detect patterns that indicate a potential threat, prevent site outage situations, develop Splunk dashboards and alerts
and ensure enhanced online shopping experience to customers.
• Developed C#/SQL/UNIX tools to generate, monitor and trend KPI metrics to identify patterns for normal
and abnormal operational conditions.
• Designed and developed an automated UNIX tool to migrate catalog data for selective SKUs from a source
database to any QA/Dev database to eliminate 4-day full feed processing in lower life cycle environments."
            />

            <Experience
              tech="INFORMATICA,Oracle,PL/SQL,Shell Scripts,TWS,Automation"
              company="GlaxoSmithKline"
              logo={gsklogo}
              title="Technical Consultant | January 2011 – March 2012"
              details="• Showcased 65% run time reduction for a weekly data distribution process and brought down the run time from 18 hours to 6.5 hours using PL/SQL bulk collections, recursive sub query factoring, analytical functions, scalar sub query caching and SQL performance tuning. 
          • Developed tools to monitor and identify expensive SQLs using Active Session History for continued performance improvement considerations.
          • Instrumented numerous PL/SQL code for system performance metrics gathering.
          • Programmed a solution to track and validate the quality of data migrations from legacy application to a web based Oracle On-Demand CRM application using PL/SQL and UNIX.
          • Automated the manual data seeding and distribution process for samples, details and vouchers used during new drug launch.
          • Developed and deployed an automated on-demand UNIX batch process which FTPs massive Rx growth & non retail data to 3rd party service provider’s [Medimedia] external facing system.
          • Implemented a PL/SQL solution to reduce the licensing cost by deactivating the credentials inactive reps by interfacing with the HR systems.
          • Developed a PL/SQL solution to achieve enormous data reduction by controlled purging algorithm.
          • Designed and developed a PL/SQL solution to build a metrics table which helps to identify the optimum date range for each territory / district to extract the customer data that falls within the defined threshold limit."
            />
            <Experience
              tech="Java,J2EE,PowerBuilder,Pl/Sql,Oracle,UNIX Shell Scripts,autosys,Automation,AMS"
              company="PepsiCo-BIS, Valhalla, New York"
              title="Technical Lead | October 2008 – December 2010"
              logo={pepsilogo}
              details="
        Demonstrated leadership by owning responsibility and delegating tasks and mentoring the team.
• Served as an application SME.
• Diagnosed and resolved performance bottlenecks in pricing using multi-threading and tuning complex
SQLs.
• Designed, developed, system tested and deployed more than 130 application enhancements and 3 RICEFs
using PowerBuilder 9, PL/SQL Objects, UNIX Shell Scripts and INFORMATICA."
            />
            <Experience
              tech="Java,J2EE,PowerBuilder,Pl/Sql,Oracle,UNIX Shell Scripts,autosys,Automation,AMS"
              company="Wipro Technologies (PepsiCo)"
              logo={wiprologo}
              title="Senior Project Engineer |  June 2005 – October 2008"
              details="• Designed, developed and unit tested production break-fix in PowerBuilder 9 and Oracle PL/SQL.
      • Implemented visual control dashboards to monitor the project progress.
      • Developed and unit tested a plug-in utility which embeds into the systems PL/SQL code and enables the application support teams to achieve better control over the concentrate syrup’s volume data and the payments and accruals [AP/GL] transactions.
      • Contributed towards the documentation and maintenance of all unit and system testing test cases and test plans.
      • Designed, developed and unit tested PowerBuilder 9 and Oracle PL/SQL objects which ensured proper handshake between legacy mainframe applications and the EPM while transmitting volume, customer and membership feed files.
• Developed and tested a data recycling engine which recycles the feed records with business validation errors.
  "
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
