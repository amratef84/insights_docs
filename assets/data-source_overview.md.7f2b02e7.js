import{_ as a,c as e,o as t,a as s}from"./app.aecb249e.js";const o="/assets/new-data-source.848cd741.png",n="/assets/sync-tables.226adf34.png",y=JSON.parse('{"title":"Data Source","description":"","frontmatter":{},"headers":[{"level":2,"title":"Adding a Data Source","slug":"adding-a-data-source"},{"level":3,"title":"Adding a Remote MySQL Database","slug":"adding-a-remote-mysql-database"},{"level":2,"title":"Syncing Schema","slug":"syncing-schema"}],"relativePath":"data-source/overview.md","lastUpdated":1681986768000}'),c={name:"data-source/overview.md"},d=s('<h1 id="data-source" tabindex="-1">Data Source <a class="header-anchor" href="#data-source" aria-hidden="true">#</a></h1><p>Insights allows you to connect and analyze various data sources. You can add multiple data sources to process and combine data from different databases.</p><h2 id="adding-a-data-source" tabindex="-1">Adding a Data Source <a class="header-anchor" href="#adding-a-data-source" aria-hidden="true">#</a></h2><p>To add a new data source, go to the <strong>Data Sources</strong> tab, and click on <strong>New</strong>. You can add following types of data sources:</p><ul><li>Remote MySQL Database</li><li>Local SQLite Database</li><li>CSV File</li></ul><div class="tip custom-block"><p class="custom-block-title">Application&#39;s Database</p><p>By default, Insights creates a data source to connect to the App&#39;s database. You can use this data source to query the App&#39;s database.</p></div><h3 id="adding-a-remote-mysql-database" tabindex="-1">Adding a Remote MySQL Database <a class="header-anchor" href="#adding-a-remote-mysql-database" aria-hidden="true">#</a></h3><p>You can add a remote MySQL database by entering the database credentials.</p><p>Here&#39;s what you will need to connect to your database:</p><ul><li>The <strong>hostname</strong> of the server where your database is (leave empty for localhost)</li><li>The <strong>port</strong> of the database server (leave empty for default port)</li><li>The <strong>database name</strong> of the database you want to connect to</li><li>The <strong>username</strong> you use for the database (preferably a user with read-only privileges)</li><li>The <strong>password</strong> you use for the database</li></ul><p><img src="'+o+'" alt="New Data Source"></p><div class="tip custom-block"><p class="custom-block-title">Use SSL</p><p>If you are connecting to a remote database, you must keep it enabled</p></div><div class="tip custom-block"><p class="custom-block-title">Connect to Frappe Cloud Site</p><p>If your site is hosted on Frappe Cloud, check out these <a href="./../miscellaneous/faq.html#q-my-site-is-hosted-on-frappe-cloud-how-do-i-connect-to-my-database">instructions</a> get the database credentials.</p></div><h2 id="syncing-schema" tabindex="-1">Syncing Schema <a class="header-anchor" href="#syncing-schema" aria-hidden="true">#</a></h2><p>Once you have added a data source, Insights will automatically sync the schema of the database. You can click on the Data Source to view the list of tables.</p><p>You can also manually sync the schema by clicking on the <strong>Sync Tables</strong> button under the 3-dot menu.</p><p><img src="'+n+'" alt="Sync Tables"></p>',17),r=[d];function i(l,u,h,p,m,g){return t(),e("div",null,r)}const f=a(c,[["render",i]]);export{y as __pageData,f as default};