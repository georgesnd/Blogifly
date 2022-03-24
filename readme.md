# Create a Wordpress Clone
​
Wordpress maybe is the most popular platform for creating websites. 
​
Your task is to create a Wordpress clone for building Blogs. At this platform, there should be administrators and visitors.
​
Administrators are system users than can write posts and configure the way the website look.
​
Visitors can only read posts, rate posts, add comments to the posts etc.
​

# Administrators
​
### You need to create an administrator area where only administrators have access.
### Post authors (administrators) should be able to login to the administration area and do the following tasks:
​
***Administrators/authors should be able to:***
1. Login/logout from the administrators area
2. Recover their forgotten password
3. Change their password
4. Create a new category
5. Delete a category (only when a category has no posts attached to it)
6. Edit a category
7. List all categories
8. Create a new post. When creating a new post, user should be able to:
   1. add a title
   2. add a subtitle
   3. add main post text using a WYSIWYG (What You See Is What You Get) editor so users could add images and videos (rich text)
      1. An example of a WYSIWYG editor is here: https://www.npmjs.com/package/tinymce
   4. add meta tags such as description and author
   5. add custom tags so a visitor can select a tag and see all posts that are related to that tag
   6. add the main image for that post
   7. choose at which categories this post should belong to
9. Delete a post
10. Update a post. When viewing/editing a post administrators should be able to:
   1. edit each field from the post
   2. view the comments for the post
   3. delete a comment for that post
11. List all posts
12. Search for posts that contain certain text
13. Filter posts by category
​
​
# Visitors
​
- ### Visitors should be able to visit the site and read blog posts about different categories.
- ### Visitors should be able at all times to search for specific texts in all posts
- ### There should be a search results page
- ### There should be a "page not found" page
- ### There should be a "tags" component and display tags that when clicked the visitor should see all posts that are related to that tag
- ### There should be pagination
- ### filter posts by category
- ### Visitors when reading a post should be able to:
   1. Add a comment to the post
   2. Rate the post
​
​
There should be a home page with all post categories
There should be a contact page where visitors could send emails to the Blog Authors
​
​
# Documentation 
​
### Create documentation for your APIs. E.g.
1. https://github.com/HackerNews/API
2. https://openweathermap.org/current
​
​
# Advanced:
1. Visitors see related posts at the end of each post
2. Administrators should be able to create the menu and the client app should render the menu dynamically
