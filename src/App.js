import React, { Component } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Highlights from "./components/Highlights";
import Experience from "./components/Experience";
import thdlogo from "./thd.svg";
import gsklogo from "./logo-gsk.png";
import pepsilogo from "./pepsico-logo.jpg";
import wiprologo from "./wipro-logo.png";
import {
  Collapse,
  Navbar,
  Button,
  NavbarBrand,
  Nav,
  CardBody,
  Card
} from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
    this.setState(state => ({ collapse: !state.collapse }));
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div style={{ fontSize: "30px", paddingTop: "2vh" }}>
            <big>R</big>amkumar <big>P</big>aranjothy
          </div>

          <div className="roles">
            <div className="roles-inner">Cloud Architect</div>
            <div className="roles-inner">Sr. Data Engineer </div>
            <div className="roles-inner">Technical Architect </div>
            <div className="roles-inner">Lead Full-Stack Developer </div>
            <div className="roles-inner">Project Manager </div>
          </div>
          {/* <div style={{ textAlign: "center" , paddingBottom:"1vh"}}>
            GitHub LinkedIn  Facebook
          </div> */}
        </div>
        <div className="summary">
          Skilled IT professional with 14+ years of progressive experience in
          driving and delivering medium to large scale IT projects. Experienced
          in planning, executing and delivering mission critical, high
          availability, customer facing web applications and APIs.
        </div>
          <Highlights className="container" />
          <div className="profile">
            <div className="experience">
              <Experience
                tech="Java,Python,Google Cloud(GCP),Cloud Foundry,Cloud Functions,Postgres,Pub/Sub,Google DataFlows,Apache Beam,Docker,SpringBoot,NodeJS,React,NGINX,DB2,Concourse,Analytical SQLs,Cassandra,Redis,TWS,Ab-Initio,JIRA,Pivotal Tracker"
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
              • Designed and developed a PL/SQL solution to build a metrics table which helps to identify the optimum date range for each territory / district to extract the customer data that falls within the defined threshold limit.
"
              />
              <Experience
                tech="Java,J2EE,PowerBuilder,Pl/Sql,Oracle,UNIX Shell Scripts,autosys,Automation,AMS"
                company="PepsiCo-BIS"
                title="Technical Lead | October 2008 – December 2010"
                logo={pepsilogo}
                details="
        Demonstrated leadership by owning responsibility and delegating tasks and mentoring the team.
• Served as an application SME.
• Diagnosed and resolved performance bottlenecks in pricing using multi-threading and tuning complex
SQLs.
• Designed, developed, system tested and deployed more than 130 application enhancements and 3 RICEFs
using PowerBuilder 9, PL/SQL Objects, UNIX Shell Scripts and INFORMATICA.
• Played a pivotal role in remotely leading an offshore team of 4 support staff. 
• Demonstrated leadership by owning responsibility and delegating tasks and mentoring the team.
• Streamlined the handoff protocols between onshore and offshore teams.
• Raised the support staffs comfort level by facilitating knowledge sharing sessions.
• Served as an application SME for interacting with client’s project team and external vendors.
• Responsible for delivering business requirements through production implementation.
• Implemented more than 30 scheduled baseline production releases into production with 0 PPD.
• Participated in application release prioritization meetings with business partners.
• Submitted project proposals to automate the High Yield Syrup volume processing.
• Conducted external design and code reviews for enhancements and break-fixes.
• Oversaw quality assurance of production break-fixes.
• Showcased system controls during KPMG SOX Audits.
• Maintained the source code, sign-offs, release notes and support documentation in StarTeam.
• Documented project status reports to business partners and management.
• Prepared project cutover plan for production implementation.
• Coordinated with upstream and downstream teams during system integration.
• Developed project proposal for business process and system improvements.
• Invented application monitoring checkpoints and workarounds to ensure business continuity.
• Diagnosed and resolved performance bottlenecks in pricing by using multi-threading and tuning complex SQLs.
• Performed database disaster recovery and application restoration.
• Rewrote a reporting solution as an INFORMATICA ETL mapping from an oracle package.
• Studied business processes in TIBCO Designer.
• Implemented daily ticket dashboard to report a quick snapshot of the tickets and their status.  The dashboard was later institutionalized across support projects in July '09.
• Automated job monitoring scripts to generate error report and thereby reduce offshore teams manual efforts.
• Introduced On-DEMAND Job for EPM to perform data clean ups / manual upload of data (for YUM payments) without depending on the TSG/ DBA Teams.
• Implemented claim clean up feature with EPM 5.9.1 release which used to be a manual CAB clean up request.
• Automated “Projects Vs Dollars” report used during period end closes for preventing SAP idoc failures due to lack of sufficient budgets. 
• Implemented pre and post migration checklist for EPM Releases.
• Served as the application SME to interact with external vendors during the course of the project.
• Acted as an interface between the external development team and the operations support team.
• Developed an automated process to generate a report with the list of inactive “outlets “which needed to be included in the data conversion scope.
• Represented business team during the user acceptance testing for the remediated product.

"
              />
              <Experience
                tech="Java,J2EE,PowerBuilder,Pl/Sql,Oracle,UNIX Shell Scripts,autosys,Automation,AMS"
                company="Wipro Technologies"
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
