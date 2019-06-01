#Flow
Open browser
navigate to url
log in - SSO? how? otherwise custom username?
Initial page ' view all tB'
list of 5 upcoming / all in next 10 days / etc
mini calendar view with days highlighted in green, red ,yellow, blank
view all time bars - list view container at bottom of page
search - filters list
create new time bar button
opens input page - two pages, first for info, second for tB data
after creation goes to view that single time bar and confirms notifications
auto updates ledger / central csv?
need to be able to create filter for open / closed time bars - postgres seems best here?

##Front end
semantic UI
react
redux - even needed? maybe easier for API calls

## ## components

navbar - side navbar
main view
single view
new time bar
edit time bar
export option to customize
large calendar view - Modal

## server

Python
Flask ( maybe node/express)
API routes
serverless ?

## db

mongodb - may be best with docu based storage and the db search effectiveness
s3 and csvs?
hosting on AWS?
pg doesn't seem like best option?

##hosting
AWS? GCP? Azure?

Ideal: Semantic/React/Hooks/redux/Python/Flask/pandas/s3/boto3/AWS

easiest: Semantic/React/Redux/node/express/postgres/heroku

<!-- Components -->

##Front End
Client
--Index
--App
--Routes
--Components
---login
---Home
---View All
---Single View
---Create New
---Edit
---Export Modal
---Calendar View Modal
--Store
---Single Store
Server
-API
--Login
--timebar
-DB
--time bar tables? TBD

<!-- all the time bar CRUD routes -->

vessel - multiple with each vessel? could use it to pre populate data
voyage - single use or many?
claim shoud be unique? claim is all dates and such, notes, etc

## Process
