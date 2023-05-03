## Test Plan ✨

Functional Tests

- [x] Purchase
- [x] Contact Us
- [x] Login
  - [x] Login Exception with incorrect email
  - [x] Login Exception with incorrect password
- [x] Logout


## Design & Strategy 🔍

Before started, I tested all the flows in a manual way, to know about the site and how everything works.

The scope of testing was ready, then I only put some simple test cases about authentication (it was pretty much done in the Purchase test case).

About the types of testing, are Functional end-to-end Tests. I needed to simulate a user buying something and also use the contact form, and I put all these flow together because were dependent tests (was necessary to login with the account created previously).

And then, designing the test approach - I knew that I'll find some difficulties (such as all automation) and the first was the Google Ads, so I created a function to block these Ads. And the second and last was the popup, I also needed to develop a solution for that, so everything works in the best and correct way.
