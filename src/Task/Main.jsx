//@ Website Name : Bookmart - Sell Your Book Hassle Free

//# Main Part :

Your website has to be related to selling used (second-hand products) with the ability to advertise a product.Some examples are **Buy-sell** second-hand furniture, car, bike, truck, bus, books, cooking utensils, mobile phones, headphones, laptops, laptop parts, watches, TV, exercise equipment, camera, clothes, music instruments, Fridge, A/C, etc. Remember, you will have to **choose only one types of product**. For instance, if you select furniture, then you **cannot** sell any other products, such as mobile phones, instruments, etc., other than furniture.

1. **IMPORTANT:** Make sure your design is **unique**. Your code and design must not match any of the **projects implemented in our course**. You must not copy your **previous assignments** or any **practice project** displayed in the course or in our **conceptual sessions**. Failing to satisfy any of the above conditions will cost you a significant mark or even 0.

2. Take your time thinking about the design. Just spend 30 minutes or an hour and then start your project. If needed, put a placeholder image and work on developing the functionalities. Once you are done, replace them with relevant images.

3. Use the Environment variable on both the client (firebase config) and server side (MongoDB credentials, Access token secret, stripe, etc.). Use the .gitignore file on the server side.

4. It is important to note that your UX design should be good. For example, suppose a user does not see data when they visit a route, does not see the ad after posting the advertisement without reloading the site, or gets logged out when visiting a private route right after signing up. In that case, etc., then **you may lose a significant mark for that**.

//@ Main Requirements

1. Your homepage will have a **navbar** , a banner/slider, Advertised items, second-hand **product categories** section and a realistic **footer**.

//* 2. Add **one** extra section on the home page. Make sure it is unique and relevant to your website.

3. **You will have to decide what would be the categories of the second-hand product you have selected.** For instance, if your website is about second-hand furniture, you can divide your categories into the bedroom, kitchen, dining room, etc.; if it is about second-hand car, your categories can be a Microbus, luxury car, electic car, etc. Or you can categorize second-hand products under brand names if you want. However, make sure it is relevant. You will need at least 3 categories, each with at least 2 products.

4. When the user clicks on a category on the home page, they will be redirected to the **/category/:id** route, where they will see **second-hand products under that category only**. The **/category/:id** page will have a column(s) of cards. It can be 1,2, or 3 columns. Each card will have a picture, name, location, resale price, original price, years of use, the time when it got posted, the seller's name; if the seller is verified, there will be a blue tick next to their name and a **Book now** button. Please note, category:/id will be a private route.

5. On clicking the **Book now** button, if the user is not modal will have a form with the logged-in user name and email address, item name, and price(item name, price, and user information will not be editable) by default. You will give your phone number and meeting location, and lastly, there will be a submit button. After clicking the submit button, you will have to inform the buyer with a modal/toast that the item is booked.

6. Your navbar will have a **login** button. Implement email/password-based authentication and at least one social login(google, Facebook, GitHub, etc.) authentication. **Create an extra field for options. There will be two options: a radio button, a dropdown, a toggle button, etc. If the user creates a seller account, he will choose the seller option. Otherwise, a normal user will have the user option selected by default**. Users logged in by using social media will be considered as buyers.

   **Note:** Do not apply email verification as it will be an inconvenience for the examiner. It is important for the examiner to be able to check your authentication without any hassle. If you want, you can add email verification after getting the assignment result.

//& 7. If a user(buyer/seller/admin) is logged in, they will see **logout** (should be working) and another option on the header called Dashboard. The dashboard routes will change based on the users:

   **Buyers will see:** My orders(see bonus requirement 7),

   **Sellers will see:** Add A product (See Requirement 8), My Products(see requirement 9), My buyers(this one is optional).

   **Admin will see:** All Sellers, All Buyers (see requirement 12), Reported Items

8. On the " **Add A Product**" route, create a form that will have fields for product name, price, condition type(excellent, good, fair), mobile number, location (Chittagong, Dhaka, etc.), description, price, Year of purchase and other relevant information. After submitting the form, a modal/toast with a message will pop up to inform the user. Please remember, they must be a seller to add a product (think about the verification process for the admin access). After adding the product, you will then be redirected to the My Products Page.

9. On the **"My Products"** page, sellers can delete sales status (available or sold), price, and any other relevant information they want to show. Please note there will be a special button for each unsold/available product where the seller can hit the button to advertise.

10. The advertised items will appear on the home page. Please note if there are no items marked as advertised, the advertised items section won't be displayed on the home page. The advertised section will only appear if there is one or more available (unsold items) are marked to be advertised.

11. " **My buyers" are optional.** See the optional section for details. On this page, a seller will see the buyer's phone, name, email address, and location.

12. In the **All Sellers,** the Admin will see the sellers. On the **All Buyers** route, the Admin can see all the Buyers. If the Admin wants, he can delete any buyers or sellers.

//* 13. On the navbar, there will be a Blogs route. This will be an open route (anyone visiting your website will see it). You will have to answer all the questions, and they are

//*     13.1 What are the different ways to manage a state in a React application?

//*     13.2 How does prototypical inheritance work?

//*     13.3 What is a unit test? Why should we write unit tests?

//*     13.4 React vs. Angular vs. Vue?

//* 14. Create a meaningful 404 page (not found page). Add a meaningful image on the 404 page.

15. Use a database to store information. It could be MongoDB atlas or any other database. Save the users in the database
