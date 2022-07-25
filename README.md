# Assessment 4: Django
- **Craigslist Jr**

## Important Grading Information
- Make sure you read the [Assessment-4 Grading Rubric](https://docs.google.com/spreadsheets/d/11bCD5tstmbPhq8eqQD6NswuFOhiBLEBZv56ujREpPtQ/edit?usp=sharing).
  - Django Front-End (50%)
  - Django Back-End (50%)
- You need to get a 75% or better to pass. (You must pass all assessments in order to graduate Code Platoon's program.)
- If you fail the assessment, you have can retake it once to improve your score. For this assessment... 
  - 5% penalty: If you complete and submit the retake within **one week** of receiving your grade. 
  - 10% penalty: If you complete and submit the retake afterwards.

## Rules / Process
- This test is fully open notes and open Google, but is not to be completed with the help of other students/individuals
- Do not open a pull request against this repository.

## Requirements
- This assessment must be completed using Django. 
- You must use a PostgreSQL for your database.
  - **You MUST name your database the following: assessment_four**. This enables us to streamline our grading process. **You may fail the assessment** if you do not correctly name your database.
  - Make sure you provide some seed data using Django fixtures 
- You **must** include a requirements.txt file with all Python dependencies for your project so instructors can successfully build & run your application.
- If your assessment does anything extra, you **must** include instructions on how to build & run your project so that instructors can successfully build & run your application.

## Challenge
Everyone loves going on Craigslist to find interesting people and interesting items. 
The joy of Craigslist is that it doesn't upgrade itself to stay up to date with the times - it's the same old Craigslist that everyone knows and loves. 
The core schema has also remained relatively unchanged over the years. 
Today, you will build a basic Craigslist CRUD app with nested routes. We will call this site: Craigslist Junior.

You will need to build several routes for this project. 
The following routes should return HTML pages when the user navigates their browser there. 
These URLs are intended to be readable by humans.
- `GET /`: A welcome page that lists all of the categories (with links to the categories) -----DONE--------
- `GET /categories/new`: A page with a form to create a new category -----DONE--------
- `GET /categories/<int:category_id>/view`: A page to view the detail of a specific category and a list of all of its associated posts (with links to those posts) -----DONE--------
- `GET /categories/<int:category_id>/edit`: A page with a form to update a specific category, with current values filled in already. Also include the ability to delete the specific category from this page. -----DONE----
- `GET /categories/<int:category_id>/posts/new`: A page with a form to create a new post for this category. ----DONE-----
- `GET /categories/<int:category_id>/posts/<int:post_id>/view`: A page to view the details of a specific post. Also include the ability go back to the parent category detail page (`/categories/<int:category_id/>/view`). ---_DONE------
- `GET /categories/<int:category_id>/posts/<int:post_id>/edit`: A page with a form to update a specific post, with the post's current title and content filled in already. Also include the ability to delete the specific post from here. ---DONE----

The following routes should return JSON data when the client sends an AJAX request.
These URLs are intended to conform to RESTful conventions. We'll learn more about RESTful API design later. 
- `GET /categories` : returns a list of all categories. ----DONE-------
- `GET /categories/<int:category_id>` : returns details about a single category.
- `POST /categories` : Creates a new category. The request body should specify the name of the new category. ----DONE-------
- `PUT /categories/<int:category_id>` : Updates a category. The request body should specify the new name of the category. ----DONE------+

- `DELETE /categories/<int:category_id>` : Deletes a category. 

- `GET /posts` : Returns a list of all posts. If the user specifies a category_id in the query string, only return posts from that category.
- `GET /posts/<int:post_id>` : Returns details about this specific post.
- `POST /posts` : Creates a new post. The request body should specify the title and content of this post. ----DONE-----
- `PUT /posts/<int:post_id>` : Updates a post. The request body should specify the new title and content of the post. ----DONE----
- `DELETE /posts/<int:post_id>` : Deletes a post. ----DONE-----



Make sure your application has proper links on pages. The user should never have to type in the browser's address bar to get to pages (aside from getting to the home page). Also provide proper re-routing, i.e. for creating, updating, or deleting data... all actions should automatically redirect to another appropriate page, if successful, or display an error message if unsuccessful.

Also, please make sure you supply some seed data for your project (using [Django Fixtures](https://docs.djangoproject.com/en/4.0/howto/initial-data/)).

You do not need to style your pages (as Craigslist really doesn't make an effort to), as long as your content and functionality is accessible.
