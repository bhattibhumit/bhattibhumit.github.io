/* =========================================================================
   EDIT YOUR INFO HERE
   This is the only file you should need to touch to update the website.
   Change the text between the quotes " " — don't remove commas or braces.
   Leave a value as "" (empty quotes) to hide that item.
   ========================================================================= */

const SITE_DATA = {

  // ---- Top-level identity ----
  name: "Bhumit Bhatti",
  role: "Data Analyst · Data Engineer · Python Developer",
  location: "Gujarat, India",

  // The big opening number on the homepage. Use a real, specific stat.
  heroStat: {
    // value: "1,000,000+",
    // label: "raw telecom records cleaned and modeled into a churn analytics dashboard"
  },

  heroIntro: "I turn messy, real-world data into decision-ready dashboards and pipelines — using Python and SQL to build the pipeline, and Power BI to tell the story.",

  about: "I'm a 2024 Computer Science graduate focused on data analytics, data engineering, and Python development. I work end-to-end: writing Python and SQL to clean and model raw data, designing pipelines (Bronze/Silver/Gold), and building Power BI dashboards that surface what actually matters to the business. I'm currently looking for entry-level Data Analyst, Data Engineer, or Python Developer roles.",

  // ---- Links ----
  socials: {
    github: "https://github.com/bhattibhumit",
    linkedin: "https://www.linkedin.com/in/bhumit-bhatti-348b42245/",
    email: "bhattibhumit25@gmail.com"
  },
  resumeUrl: "assets/Bhumit-Bhatti-Resume.pdf",   // put your resume PDF in the assets/ folder with this exact name

  // ---- Skills ----
  // Add or remove items freely. Group titles show as small headers.
  skills: [
    {
      group: "Languages & Querying",
      items: ["SQL", "Python", "Pandas", "Java", "C", "C++"]
    },
    {
      group: "BI & Visualization",
      items: ["Power BI", "DAX", "Power Query"]
    },
    {
      group: "Data Engineering",
      items: ["T-SQL", "Medallion Architecture", "ETL Pipelines", "Star Schema"]
    }
  ],

  // ---- Education ----
  education: [
    {
      degree: "B.Tech, Computer Science",
      institute: "Birla Vishvakarma Mahavidyalaya",
      year: "2021-2024"
    },
    {
      degree: "Diploma, Computer Science",
      institute: "C.U. Shah Polytechnic",
      year: "2018-2021"
    }

  ],

  // ---- Certifications ----
  // credentialUrl: optional link to the verification page. Leave "" to hide the link.
  certifications: [
    {
      name: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
      issuer: "Microsoft",
      year: "2026",
      credentialUrl: "https://learn.microsoft.com/en-us/users/bhumitbhatti-4767/credentials/addd0427128d9763?ref=https%3A%2F%2Fwww.linkedin.com%2F"
    },
    {
      name: "SQL (Basics)",
      issuer: "HackerRank",
      year: "2024",
      credentialUrl: "https://www.hackerrank.com/certificates/4df8236c5302"
    },
    {
      name: "Python",
      issuer: "HackerRank",
      year: "2023",
      credentialUrl: "https://www.hackerrank.com/certificates/8f50d70bda85"
    }
  ],

  // ---- Projects ----
  // status: "Completed" or "In Progress"
  // demo: optional link to a live dashboard, PDF walkthrough, or Drive file. Leave "" to hide.
  projects: [
    {
      title: "TrueConnect — Telecom Customer Churn Analytics",
      status: "Completed",
      description: "End-to-end analytics pipeline on a messy ~1M-row telecom dataset. Built Bronze/Silver/Gold layers in SQL Server to clean and model the data, then designed a 5-page Power BI dashboard covering demographics, plan performance, service adoption, and usage & billing.",
      tags: ["SQL Server", "Medallion Architecture", "Power BI", "ETL"],
      github: "https://github.com/bhattibhumit/telecom-churn-analytics-powerbi",
      demo: ""
    },
    {
      title: "SQL Data Warehouse — Medallion Architecture",
      status: "Completed",
      description: "A modern data warehouse built in SQL Server following the Medallion Architecture. Consolidated CRM and ERP source data into a single Star Schema model (Bronze → Silver → Gold) for analytical reporting.",
      tags: ["SQL Server", "Star Schema", "ETL", "Data Modeling"],
      github: "https://github.com/bhattibhumit/sql-data-warehouse-project",
      demo: ""
    },
    // {
    //   title: "Superstore Sales Analytics",
    //   status: "In Progress",
    //   description: "Sales performance analysis on the classic Superstore dataset — combining SQL and Pandas for data prep with a Power BI dashboard for regional and category-level sales insight.",
    //   tags: ["SQL", "Pandas", "Power BI"],
    //   github: "",
    //   demo: ""
    // },
    // {
    //   title: "Zomato-Style Food Delivery Analytics",
    //   status: "In Progress",
    //   description: "Restaurant, customer, and delivery/order analysis modeled after a food-delivery platform, with a Power BI report built around a focused set of operational KPIs.",
    //   tags: ["Power BI", "KPI Design", "Data Modeling"],
    //   github: "",
    //   demo: ""
    // }
  ]
};
